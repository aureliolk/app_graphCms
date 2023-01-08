import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client"
import { client } from '../lib/apollo'
import { ContextProvider } from '../contexts/useContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ContextProvider>
  )
}
