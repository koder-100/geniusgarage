import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GeniusGarage - docs',
  description: ' Documentation for GeniusGarage components and utilities',
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
