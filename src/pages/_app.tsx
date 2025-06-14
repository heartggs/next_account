import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { SessionProvider } from 'next-auth/react'

import globalStyles from '@/styles/globalStyles'
import Layout from '@/components/shared/Layout'
import AuthGuard from '@components/auth/AuthGuard'
import Navbar from '@shared/Navbar'

const client = new QueryClient({})

export default function App({
  Component,
  pageProps: { dehydratedState, session, ...pageProps },
}: AppProps) {
  console.log('_app')
  return (
    <Layout>
      <Global styles={globalStyles} />
      <SessionProvider session={session}>
        <QueryClientProvider client={client}>
          <Hydrate state={dehydratedState}>
            <AuthGuard>
              <Navbar />
              <Component {...pageProps} />
            </AuthGuard>
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </Layout>
  )
}
