import Link from 'next/link';
import { Button } from '@geniusgarage/ui/button';

const snippetManagerUrl = process.env.NEXT_PUBLIC_SNIPPET_MANAGER_URL ?? 'http://localhost:3001';
const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL ?? 'http://localhost:3002';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
        <Link
          href="/features"
          style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}
        >
          Features
        </Link>
        &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
        <Link
          href={snippetManagerUrl}
          style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}
        >
          View Snippet manager
        </Link>
        &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
        <Link
          href={docsUrl}
          style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}
        >
          View Component Docs
        </Link>
      </nav>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠 GeniusGarage</h1>
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem' }}>
          Your code snippet library
        </p>

        <Button>Get Started</Button>
        <Button variant="secondary">Get Started</Button>

        <p style={{ color: '#666', marginTop: '3rem', fontSize: '0.875rem' }}>
          This is the starter project. You&apos;ll build out the full platform as you progress
          through the course.
        </p>
      </div>
    </main>
  );
}
