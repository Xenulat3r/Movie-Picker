import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@/Context/user'
import { LinkProvider } from '@/Context/links'
import Head from 'next/head'
import MainLayout from '@/components/Layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps,}: AppProps) {

  return (
  
    <UserProvider>
      <LinkProvider>
<Head>
  <title>Movie--Picker</title>
</Head>

          <MainLayout>
          <Component {...pageProps} />
          </MainLayout>
        
        

      </LinkProvider>
    </UserProvider>
  )
}

