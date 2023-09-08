import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wego',
  description: 'Your RapidKL Solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Test browser image */}
      <Head> <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png" /> </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
