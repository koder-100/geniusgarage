import Link from 'next/link';
import { MainMenu } from '@geniusgarage/ui/main-menu';
import { Button } from '@geniusgarage/ui/button';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      {/* Main Menu */}
      <MainMenu selectedItem="home" />

      {/* Main Content */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠 GeniusGarage</h1>
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem' }}>
          Your code snippet library
        </p>

        <Button>Get Started</Button>
        <Button variant="secondary">Get Started</Button>

        <Link
          href="/features"
          style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}
        >
          Features
        </Link>

        <p style={{ color: '#666', marginTop: '3rem', fontSize: '0.875rem' }}>
          This is the starter project. You&apos;ll build out the full platform as you progress
          through the course.
        </p>
      </div>

      {/* Separator */}
      <hr style={{ marginTop: '4rem', marginBottom: '3rem', border: 'none', borderTop: '1px solid #eaeaea' }} />

      {/* About */}
      <section>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>About this project</h2>
        <p style={{ color: '#444', lineHeight: 1.6, marginBottom: '1rem' }}>
          GeniusGarage is the sample application built throughout Vercel&apos;s{' '}
          <Link
            href="https://vercel.com/academy/production-monorepos"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0070f3', fontWeight: 'bold' }}
          >
            Production Monorepos with Turborepo
          </Link>{' '}
          course. It&apos;s a multi-app developer platform&mdash;spanning a marketing site, this
          snippet manager, and a documentation portal&mdash;all managed in a single repository
          with shared UI components, configurations, and utilities.
        </p>
        <p style={{ color: '#444', lineHeight: 1.6, marginBottom: '1rem' }}>
          Along the way, the course covers Turborepo for intelligent task orchestration and
          caching, shared packages and configs, testing with Vitest, CI/CD with GitHub Actions
          and remote caching, coordinated releases with Changesets, and enterprise patterns like
          code generators and the next-forge production template.
        </p>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>
          Source:{' '}
          <a
            href="https://vercel.com/academy/production-monorepos"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0070f3' }}
          >
            vercel.com/academy/production-monorepos
          </a>
        </p>
      </section>
    </main>
  );
}
