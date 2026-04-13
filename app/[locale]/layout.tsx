import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import "./globals.css";
import Header from '@/modules/header/page';
import Footer from '@/modules/footer/page';
import { Toaster } from 'sonner';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; segments?: string[] }>;
  
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale as any);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header/>
            {children}
          <Footer/>
          <Toaster/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}