import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GeniusGarage - home',
  description:
    'Welcome to GeniusGarage, your one-stop destination for managing and exploring code snippets and component documentation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
