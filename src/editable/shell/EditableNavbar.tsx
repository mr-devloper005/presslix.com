'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const navLinks = globalContent.nav.primaryLinks

  return (
    <header className="sticky top-0 z-50 bg-white/95 text-[var(--slot4-page-text)] shadow-[0_8px_30px_rgba(15,23,42,.08)] backdrop-blur transition-all">
      <div className="editable-progress" aria-hidden="true" />
      <div className="bg-[var(--slot4-dark-bg)] text-white">
        <div className="mx-auto flex max-w-[var(--editable-container)] items-center justify-between px-4 py-2 text-[11px] font-semibold sm:px-6 lg:px-8">
          <span className="hidden sm:inline">{globalContent.nav.tagline}</span>
          <span className="truncate">{ SITE_CONFIG.name}</span>
        </div>
      </div>

      <div className="mx-auto grid min-h-[76px] max-w-[var(--editable-container)] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 transition-all sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="flex items-center gap-1 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
            <img src="/favicon.ico" alt="Logo" className="h-9 w-9" />
            <span className="text-[var(--slot4-accent)]">|</span>{SITE_CONFIG.name}
          </Link>
        </div>

        <nav className="hidden justify-center gap-7 text-sm font-black lg:flex">
          {navLinks.map((item) => <Link key={item.href} href={item.href} className="editable-underline">{item.label}</Link>)}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link href="/search" className="hidden h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white transition hover:border-[var(--slot4-teal)] hover:text-[var(--slot4-teal)] sm:inline-flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </Link>
          {session ? (
            <>
              <Link href="/create" className="hidden rounded-md bg-[var(--slot4-teal)] px-4 py-3 text-[11px] font-black uppercase tracking-[.12em] text-white sm:block">Create</Link>
              <span className="hidden max-w-28 truncate text-xs font-black sm:inline-flex"><UserRound className="mr-1 h-4 w-4" />{session.name}</span>
              <button type="button" onClick={logout} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]" aria-label="Logout"><LogOut className="h-4 w-4" /></button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden rounded-md px-3 py-2 text-xs font-black uppercase tracking-[.12em] hover:text-[var(--slot4-teal)] sm:block">Login</Link>
              <Link href="/signup" className="rounded-md bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:bg-[var(--slot4-teal)] sm:px-5">Sign up</Link>
            </>
          )}
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex items-center rounded-md bg-[var(--slot4-gray)] px-3">
            <Search className="h-4 w-4 opacity-50" />
            <input name="q" type="search" placeholder="Search media updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-bold outline-none placeholder:text-current/40" />
          </form>
          <div className="grid gap-2">
            {[...navLinks, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md bg-[var(--slot4-gray)] px-4 py-3 text-sm font-black">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
