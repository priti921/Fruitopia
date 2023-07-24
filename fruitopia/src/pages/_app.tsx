import type { AppProps as NextAppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Layout } from '@components/index'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'

interface AppProps extends NextAppProps {
  session: any
}

export default function App({ Component, pageProps, session }: AppProps) {

  return (
    <>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <Analytics />
    </>
  )

}
