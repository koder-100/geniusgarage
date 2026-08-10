import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GeniusGarage - snippet manager',
  description: ' Manage your code snippets',
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
