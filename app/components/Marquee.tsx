const row1 = [
  "WhatsApp Bot", "CRM Automation", "Lead Capture", "Auto-Scheduling",
  "Email Sequences", "Invoice Processing", "Report Generation", "Multi-channel Sync",
]
const row2 = [
  "AI Qualification", "Follow-up Flows", "Stock Alerts", "Calendar Sync",
  "Document Extraction", "Pipeline Automation", "Smart Reminders", "Data Enrichment",
]

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div
      className="flex overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}
    >
      <div
        className="flex whitespace-nowrap shrink-0"
        style={{
          animation: `marquee ${reverse ? '30s' : '24s'} linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default"
            style={{ paddingLeft: '32px', paddingRight: '32px' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background: i % 3 === 0
                  ? 'rgba(124,58,237,0.6)'
                  : i % 3 === 1
                  ? 'rgba(6,182,212,0.5)'
                  : 'rgba(165,107,255,0.45)',
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative py-5 border-y border-dark-border overflow-hidden">
      <div className="space-y-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </div>
  )
}
