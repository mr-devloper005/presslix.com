'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="editable-dots bg-white">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="border-l-4 border-[var(--slot4-accent)] pl-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="editable-animate mt-4 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-black/65">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 px-4 pb-14 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <aside className="overflow-hidden rounded-lg bg-[var(--slot4-dark-bg)] text-white">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border-b border-white/25 p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="mt-6 text-3xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="editable-card p-6 sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
