import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Radhe Fitness - Science-Based Training',
  description: 'Transform your body and mind with science-backed training programs at Radhe Fitness.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <ThemeProvider
          defaultTheme="system"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}