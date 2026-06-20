'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
              
              <span className="text-[var(--slot4-accent)]">|</span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <form action="/signup" className="mt-8 flex max-w-xl rounded-md bg-white/10 p-1 ring-1 ring-white/15">
              <input name="email" type="email" placeholder="Email for newsroom updates" className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-white/40" />
              <button className="rounded-md bg-[var(--slot4-teal)] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              {globalContent.footer.columns[0]?.links.map((item) => <Link key={item.href} href={item.href} className="group inline-flex items-center justify-between text-sm font-bold hover:text-[var(--slot4-teal)]">{item.label}<ArrowRight className="h-4 w-4" /></Link>)}
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/15 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Publication</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-bold hover:text-[var(--slot4-teal)]">About</Link>
              <Link href="/contact" className="text-sm font-bold hover:text-[var(--slot4-teal)]">Contact</Link>
              {session ? (
                <>
                  <span className="text-sm font-bold text-white/65">{session.name}</span>
                  <Link href="/create" className="text-sm font-bold hover:text-[var(--slot4-teal)]">Publish</Link>
                  <button onClick={logout} className="text-left text-sm font-bold hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-bold hover:text-[var(--slot4-teal)]">Log in</Link>
                  <Link href="/signup" className="text-sm font-bold hover:text-[var(--slot4-teal)]">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">Copyright {year} {SITE_CONFIG.name}. {globalContent.footer.bottomNote}</div>
    </footer>
  )
}
