import Link from 'next/link'
import type { CSSProperties } from 'react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="editable-dots bg-[var(--slot4-teal)] text-white">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="border-l-4 border-[var(--slot4-accent)] pl-3 text-xs font-black uppercase tracking-[0.22em]">{pagesContent.about.badge}</p>
            <h1 className="editable-animate mt-5 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              {pagesContent.about.title}
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
          <article className="editable-card p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
            <p className="mt-6 text-3xl font-bold leading-[1.25] sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-10 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="editable-stagger grid gap-5">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} style={{ '--editable-index': index } as CSSProperties} className="editable-card p-7 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-black/65">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="bg-[var(--slot4-dark-bg)] text-white">
          <div className="mx-auto flex max-w-[var(--editable-container)] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Explore the media updates shaping the conversation.</h2>
            <Link href="/search" className="inline-flex w-fit rounded-md bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.18em]">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
