import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@/context/user'
import { LinkProvider } from '@/Context/links'

import MainLayout from '@/components/Layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps,}: AppProps) {

  return (<>
  
    <UserProvider>
      <LinkProvider>


          <MainLayout>
          <Component {...pageProps} />
          </MainLayout>
        
        

      </LinkProvider>
    </UserProvider></>
  )
}

