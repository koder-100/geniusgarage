import Link from 'next/link';

const webUrl = process.env.NEXT_PUBLIC_WEB_URL ?? 'http://localhost:3000';
const snippetManagerUrl = process.env.NEXT_PUBLIC_SNIPPET_MANAGER_URL ?? 'http://localhost:3001';
const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL ?? 'http://localhost:3002';

export interface MaunMenuProps {
  selectedItem?: 'home' | 'snippets' | 'docs';
}

export function MainMenu({ selectedItem }: MaunMenuProps) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
      <Link
        href={webUrl}
        style={{
          textDecoration: 'none',
          color: '#0070f3',
          fontWeight: 'bold',
          backgroundColor: selectedItem === 'home' ? '#ccccFF' : '',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
        }}
      >
        Home
      </Link>
      <div style={{ padding: '0.5rem' }}>-</div>
      <Link
        href={snippetManagerUrl}
        style={{
          textDecoration: 'none',
          color: '#0070f3',
          fontWeight: 'bold',
          backgroundColor: selectedItem === 'snippets' ? '#ccccFF' : '',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
        }}
      >
        View Snippet manager
      </Link>
      <div style={{ padding: '0.5rem' }}>-</div>
      <Link
        href={docsUrl}
        style={{
          textDecoration: 'none',
          color: '#0070f3',
          fontWeight: 'bold',
          backgroundColor: selectedItem === 'docs' ? '#ccccFF' : '',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
        }}
      >
        View Component Docs
      </Link>
    </nav>
  );
}
