import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight, Megaphone, Search, Send, ShieldCheck } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const highlights = posts.slice(1, 4)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name} media distribution desk.`

  return (
    <section className="editable-dots overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
      <div className={`${dc.shell.section} grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24`}>
        <div className="editable-animate">
          <p className="inline-flex border-l-4 border-[var(--slot4-accent)] pl-3 text-xs font-black uppercase tracking-[0.22em] text-white/80">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/72">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>Browse media updates <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[var(--slot4-dark-bg)]">Submit coverage</Link>
          </div>
        </div>

        <div className="editable-animate rounded-lg bg-white p-5 text-[var(--slot4-page-text)] shadow-[0_30px_90px_rgba(0,0,0,.25)] [--editable-delay:120ms]">
          <div className="rounded-md bg-[var(--slot4-teal)] p-6 text-white">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/75">Live distribution board</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">{lead?.title || 'Fresh media releases appear here automatically.'}</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">{lead ? getEditableExcerpt(lead, 160) : 'Connect real posts to populate the homepage, archive, and detail pages with live media distribution content.'}</p>
            {lead ? <Link href={postHref(primaryTask, lead, primaryRoute)} className="mt-6 inline-flex items-center gap-2 text-sm font-black">Open lead story <ArrowRight className="h-4 w-4" /></Link> : null}
          </div>
          <div className="editable-stagger mt-4 grid gap-3">
            {highlights.map((post, index) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} style={{ '--editable-index': index } as CSSProperties} className="rounded-md border border-black/10 bg-white p-4 transition hover:border-[var(--slot4-teal)] hover:bg-[var(--slot4-gray)]">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">{getEditableCategory(post)}</p>
                <h3 className="mt-2 line-clamp-2 text-lg font-black leading-tight">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 8)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex items-end justify-between gap-6">
          <div className="editable-animate">
            <p className="border-l-4 border-[var(--slot4-accent)] pl-3 text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">Latest desk notes</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.035em]">Media distribution cards</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--slot4-muted-text)]">Text-first cards keep the homepage clean: headlines, categories, summaries, and action links only.</p>
          </div>
          <Link href={primaryRoute} className="hidden rounded-md bg-[var(--slot4-accent)] px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-white transition hover:bg-[var(--slot4-teal)] sm:inline-flex">View all</Link>
        </div>
        <div className={`${dc.layout.rail} editable-stagger mt-8`}>
          {railPosts.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[8] || posts[0]
  const briefs = posts.slice(1, 7)
  if (!feature) return null
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} grid gap-8 py-14 sm:py-20 lg:grid-cols-[.85fr_1.15fr]`}>
        <div className="editable-animate rounded-lg bg-[var(--slot4-teal)] p-8 text-white shadow-[0_24px_70px_rgba(8,191,174,.25)]">
          <Megaphone className="h-9 w-9" />
          <p className="mt-8 text-xs font-black uppercase tracking-[.22em] text-white/70">Why this desk matters</p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-.035em]">Every release needs a clear route to readers.</h2>
          <p className="mt-5 text-sm leading-7 text-white/78">Announcements, coverage, campaign notes, and newsroom updates stay organized by category so visitors can move from headline to full detail without friction.</p>
        </div>
        <div className="editable-stagger grid gap-4 sm:grid-cols-2">
          {briefs.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} style={{ '--editable-index': index } as CSSProperties} className="editable-card p-6">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{getEditableCategory(post)}</p>
              <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-[-.03em]">{post.title}</h3>
              <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 140)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 7)
  if (!source.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div className="editable-animate">
            <p className="border-l-4 border-[var(--slot4-accent)] pl-3 text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">Briefing flow</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.035em]">More to discover</h2>
            <div className="editable-stagger mt-7 grid gap-4 sm:grid-cols-2">
              {source.slice(0, 4).map((post, index) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} style={{ '--editable-index': index } as CSSProperties} className="editable-card p-6">
                  <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-teal)]">{String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
                  <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-tight">{post.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 150)}</p>
                </Link>
              ))}
            </div>
          </div>
          <aside className="editable-animate rounded-lg bg-[var(--slot4-dark-bg)] p-7 text-white [--editable-delay:120ms]">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">Quick reads</p>
            <div className="mt-3">
              {source.slice(4, 7).map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
            <form action="/search" className="mt-8 rounded-md bg-white p-2 text-[var(--slot4-page-text)]">
              <label className="flex items-center">
                <Search className="ml-3 h-4 w-4 opacity-45" />
                <input name="q" placeholder="Search media updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none" />
                <button className="rounded-md bg-[var(--slot4-teal)] px-4 py-3 text-xs font-black uppercase tracking-[.12em] text-white">Search</button>
              </label>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[var(--slot4-page-bg)] pb-16">
      <div className={`${dc.shell.section}`}>
        <div className="editable-animate grid gap-8 rounded-lg bg-[var(--slot4-teal)] p-8 text-white shadow-[0_24px_70px_rgba(8,191,174,.22)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-white/70">Ready for coverage</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-[-.035em]">Send releases, updates, and media leads into one focused distribution workflow.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--slot4-accent)] px-6 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-[var(--slot4-dark-bg)]"><Send className="h-4 w-4" /> Contact desk</Link>
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[.12em] text-[var(--slot4-page-text)] transition hover:bg-[var(--slot4-dark-bg)] hover:text-white"><ShieldCheck className="h-4 w-4" /> Join now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
