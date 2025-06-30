import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Vishal Singh - Software Developer | Full Stack Developer Portfolio',
  description: 'Passionate software developer specializing in full-stack development with expertise in React, Next.js, Node.js, and modern web technologies. View my projects and get in touch.',
  keywords: 'Vishal Singh, Software Developer, Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Development',
  authors: [{ name: 'Vishal Singh' }],
  creator: 'Vishal Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vishalsingh.dev',
    title: 'Vishal Singh - Software Developer',
    description: 'Passionate software developer specializing in full-stack development with expertise in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Vishal Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Singh - Software Developer',
    description: 'Passionate software developer specializing in full-stack development with expertise in React, Next.js, Node.js, and modern web technologies.',
    creator: '@vishalsingh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vishal Singh',
              jobTitle: 'Software Developer',
              description: 'Passionate software developer specializing in full-stack development',
              url: 'https://vishalsingh.dev',
              sameAs: [
                'https://linkedin.com/in/vishal-thakur-a-m8085',
                'https://github.com/VishalThakur100'
              ],
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Python',
                'Java',
                'MongoDB',
                'PostgreSQL',
                'Full Stack Development'
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Dr. APJ Abdul Kalam Technical University'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}