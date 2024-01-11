import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Hotjar from '@hotjar/browser';

const siteId = 3822405;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

    </>
  )

}
