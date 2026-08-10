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
    </main>
  );
}
