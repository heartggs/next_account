
import Head from 'next/head'
import SEO from './SEO'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SEO title='MyAccount' description='내 자산을 편하게' image=''/>
      <Head>
        <title>MyAccount</title>
        <meta name="description" content="내 자산을 편하게" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
