import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hangman - Game</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
