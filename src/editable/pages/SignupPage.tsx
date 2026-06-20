import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-10 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto grid min-h-[calc(100vh-14rem)] max-w-[var(--editable-container)] overflow-hidden rounded-lg bg-white shadow-[0_24px_70px_rgba(15,23,42,.10)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Create account</p>
            <h1 className="mt-3 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black/10 pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="editable-dots flex flex-col justify-center bg-[var(--slot4-dark-bg)] p-8 text-white sm:p-12 lg:p-16">
            <p className="border-l-4 border-[var(--slot4-accent)] pl-3 text-xs font-black uppercase tracking-[0.22em] text-white/80">{pagesContent.auth.signup.badge}</p>
            <h2 className="editable-animate mt-5 max-w-xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-7xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
