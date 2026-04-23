import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK = process.env.N8N_CHAT_WEBHOOK ?? 'https://n8n.srv1534236.hstgr.cloud/webhook/chat-simplifai'

// Rate limiting: max 20 requests per IP per minute
const rateLimit = new Map<string, { count: number; reset: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + 60_000 })
    return true
  }
  if (entry.count >= 20) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ response: 'Demasiadas solicitudes. Esperá un momento.' }, { status: 429 })
  }
  try {
    const body = await req.json()

    const response = await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const text = await response.text()

    // n8n puede devolver body vacío si el workflow no tiene nodo "Respond to Webhook" activo
    if (!text || text.trim() === '') {
      return NextResponse.json({ response: 'Mensaje recibido. En breve te respondo.' })
    }

    try {
      const data = JSON.parse(text)
      // n8n puede devolver array (First/All Incoming Items) u objeto {response, output}
      const item = Array.isArray(data) ? data[0] : data
      const responseText = item?.resultado ?? item?.response ?? item?.output ?? item?.message ?? text
      return NextResponse.json({ response: responseText, scheduled: item?.scheduled })
    } catch {
      return NextResponse.json({ response: text })
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[chat proxy] error:', msg)
    return NextResponse.json(
      { response: 'No se pudo conectar con el asistente. Intentá más tarde.' },
      { status: 200 }
    )
  }
}
