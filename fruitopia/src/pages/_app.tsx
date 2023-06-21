import '@/styles/globals.css'
import { Layout } from '@components/index'
import type { AppProps } from 'next/app'

//web page layout

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>


  )
}
