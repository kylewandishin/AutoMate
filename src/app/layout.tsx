import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import './(auth)/auth.css';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AutoMate',
  description: 'Customize your workflow with AutoMate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={`${font.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            storageKey="theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
