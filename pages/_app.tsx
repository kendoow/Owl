import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>next js app</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp
