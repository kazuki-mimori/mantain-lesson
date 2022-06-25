import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const  querylient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={querylient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          fontFamily: 'Vardane, sans-serif'
        }}>
        <Component {...pageProps} />
      </MantineProvider>
      <ReactQueryDevtools  initialIsOpen={false}/>
    </QueryClientProvider>
  )
}



export default MyApp
