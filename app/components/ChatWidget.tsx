'use client'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import Image from 'next/image'

function renderText(text: string): ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer"
        style={{ color: '#9F67FF', textDecoration: 'underline', wordBreak: 'break-all' }}>
        {match[1]}
      </a>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

const WEBHOOK_URL = '/api/chat'

export default function ChatWidget() {
  const [isOpen, setIsOpen]           = useState(false)
  const [phase, setPhase]             = useState<'prechat' | 'chat'>('prechat')
  const [messages, setMessages]       = useState<{ type: 'bot' | 'user'; text: string }[]>([])
  const [input, setInput]             = useState('')
  const [loading, setLoading]         = useState(false)
  const [prechatErr, setPrechatErr]   = useState(false)
  const [nombre, setNombre]           = useState('')
  const [email, setEmail]             = useState('')
  const [telefono, setTelefono]       = useState('')
  const sessionId = useRef('user_' + Math.random().toString(36).substring(2, 10))
  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, loading])

  useEffect(() => {
    if (!loading && phase === 'chat') {
      inputRef.current?.focus()
    }
  }, [loading, phase])

  function startChat() {
    if (!nombre.trim() || !email.trim()) { setPrechatErr(true); return }
    setPrechatErr(false)
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: sessionId.current, message: '__init__', nombre, email, telefono })
    }).catch(() => {})
    setPhase('chat')
    setTimeout(() => {
      setMessages([{ type: 'bot', text: `¡Hola ${nombre}! 👋 Soy el asistente de SimplifAI. Estoy aquí para ayudarte a automatizar tu negocio con IA. ¿En qué te puedo ayudar hoy?` }])
    }, 180)
  }

  async function sendMsg() {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(prev => [...prev, { type: 'user', text }])
    setLoading(true)
    try {
      const r = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionId.current, message: text, nombre, email, telefono })
      })
      const d = await r.json()
      const botText = d.scheduled
        ? `✅ ¡Reunión agendada!\n\n${d.response}\n\nTe llegará una invitación a ${email}. Santiago se pondrá en contacto antes de la llamada.`
        : d.response || 'Hubo un problema. Intentá de nuevo.'
      setMessages(prev => [...prev, { type: 'bot', text: botText }])
    } catch {
      setMessages(prev => [...prev, { type: 'bot', text: 'Error de conexión. Revisá tu internet e intentá de nuevo.' }])
    }
    setLoading(false)
  }

  const inputStyle: CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(124,58,237,0.3)',
    borderRadius: 10, padding: '10px 14px', color: 'white', fontSize: 13, outline: 'none',
    fontFamily: 'inherit', transition: 'border-color 0.2s',
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label="Abrir chat"
        style={{
          position: 'fixed', bottom: 'clamp(16px, 4vw, 28px)', right: 'clamp(16px, 4vw, 28px)', width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg,#7C3AED,#06B6D4)', cursor: 'pointer',
          boxShadow: `0 4px 20px rgba(124,58,237,${isOpen ? 0.6 : 0.45})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 99999, border: 'none', transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          transform: isOpen ? 'scale(0.92)' : 'scale(1)',
        }}
        onMouseEnter={e => { if (!isOpen) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)' }}
        onMouseLeave={e => { if (!isOpen) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5l10 10M15 5L5 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <Image src="/logo.png" alt="SimplifAI" width={32} height={32} style={{ borderRadius: 8 }} />
        )}
      </button>

      {/* Chat window */}
      <div style={{
        position: 'fixed',
        bottom: 'clamp(90px, 12vw, 100px)',
        right: 'clamp(12px, 4vw, 28px)',
        width: 'min(370px, calc(100vw - 24px))',
        height: 'min(540px, calc(100dvh - 120px))',
        background: '#0D0D1A', borderRadius: 20,
        boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.25)',
        display: 'flex', flexDirection: 'column', zIndex: 99998,
        fontFamily: "'Inter',system-ui,sans-serif", overflow: 'hidden',
        transformOrigin: 'bottom right',
        transform: isOpen ? 'scale(1)' : 'scale(0.85)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease',
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg,#7C3AED 0%,#06B6D4 100%)',
          padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12,
          flexShrink: 0, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right,rgba(255,255,255,0.12),transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ width: 42, height: 42, borderRadius: 12, overflow: 'hidden', flexShrink: 0, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Image src="/logo.png" alt="SimplifAI" width={32} height={32} style={{ borderRadius: 8 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: 'white', letterSpacing: '-0.01em' }}>SimplifAI</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ADE80', display: 'inline-block', boxShadow: '0 0 6px #4ADE80' }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Asistente IA · En línea</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.12)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: 'none' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2l8 8M10 2L2 10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Pre-chat form */}
        {phase === 'prechat' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px 20px', background: '#0D0D1A', gap: 0, overflowY: 'auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>👋</div>
              <p style={{ fontWeight: 700, fontSize: 15, color: 'white', margin: 0 }}>¡Hola! ¿En qué te ayudo?</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4, lineHeight: 1.5 }}>Completá tus datos para empezar la conversación con nuestro asistente IA.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { id: 'nombre', label: 'Tu nombre *', val: nombre, set: setNombre, placeholder: 'Juan García', type: 'text' },
                { id: 'email',  label: 'Email *',     val: email,  set: setEmail,  placeholder: 'juan@empresa.com', type: 'email' },
                { id: 'tel',    label: 'WhatsApp',    val: telefono, set: setTelefono, placeholder: '+1 555 000-0000', type: 'tel' },
              ].map(f => (
                <div key={f.id}>
                  <label style={{ display: 'block', fontSize: 11, color: 'rgba(159,103,255,0.8)', marginBottom: 4, fontWeight: 600, letterSpacing: '0.04em' }}>{f.label}</label>
                  <input
                    type={f.type} value={f.val} onChange={e => f.set(e.target.value)}
                    placeholder={f.placeholder} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(124,58,237,0.7)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(124,58,237,0.3)')}
                    onKeyDown={e => { if (e.key === 'Enter' && f.id === 'tel') startChat() }}
                  />
                </div>
              ))}
            </div>
            {prechatErr && <p style={{ color: '#F87171', fontSize: 12, fontWeight: 500, textAlign: 'center', marginTop: 8 }}>Por favor completá nombre y email.</p>}
            <button onClick={startChat} style={{
              marginTop: 14, background: 'linear-gradient(135deg,#7C3AED,#06B6D4)', color: 'white',
              fontFamily: 'inherit', fontSize: 14, fontWeight: 700, textAlign: 'center',
              padding: '13px', borderRadius: 14, cursor: 'pointer', border: 'none',
              boxShadow: '0 4px 20px rgba(124,58,237,0.4)', letterSpacing: '0.01em', width: '100%',
            }}>
              Iniciar conversación →
            </button>
          </div>
        )}

        {/* Chat messages */}
        {phase === 'chat' && (
          <>
            <div ref={messagesRef} style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10, background: '#0D0D1A' }}>
              {messages.map((m, i) => (
                <div key={i} style={{
                  maxWidth: '82%', padding: '10px 14px', borderRadius: 16, fontSize: 13.5, lineHeight: 1.55, fontWeight: 500, wordBreak: 'break-word', whiteSpace: 'pre-wrap',
                  ...(m.type === 'bot'
                    ? { background: '#13131F', color: 'rgba(255,255,255,0.88)', alignSelf: 'flex-start', borderBottomLeftRadius: 4, border: '1px solid #1E1E30' }
                    : { background: 'linear-gradient(135deg,#7C3AED,#06B6D4)', color: 'white', alignSelf: 'flex-end', borderBottomRightRadius: 4 })
                }}>
                  {renderText(m.text)}
                </div>
              ))}
              {loading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#13131F', padding: '12px 16px', borderRadius: 16, borderBottomLeftRadius: 4, alignSelf: 'flex-start', border: '1px solid #1E1E30' }}>
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', display: 'inline-block', background: i === 0 ? '#7C3AED' : i === 1 ? '#9F67FF' : '#06B6D4', animation: `sai-bt 1.2s ${delay}s infinite` }} />
                  ))}
                </div>
              )}
            </div>
            <div style={{ padding: '12px 14px', background: '#13131F', borderTop: '1px solid #1E1E30', display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
              <input
                ref={inputRef}
                value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg() } }}
                placeholder="Escribí tu mensaje..."
                style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 12, padding: '10px 14px', color: 'white', fontSize: 13, outline: 'none', fontFamily: 'inherit' }}
                onFocus={e => (e.target.style.borderColor = 'rgba(124,58,237,0.6)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(124,58,237,0.25)')}
                disabled={loading}
              />
              <button onClick={sendMsg} disabled={loading} style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg,#7C3AED,#06B6D4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(124,58,237,0.4)', border: 'none', opacity: loading ? 0.6 : 1 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M8 2l6 6-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes sai-bt { 0%,100%{opacity:0.3;transform:translateY(0)} 50%{opacity:1;transform:translateY(-5px)} }
      `}</style>
    </>
  )
}
