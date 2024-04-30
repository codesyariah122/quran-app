/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: Hydration
 */
import * as React from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnyObject } from '@/types';
import '@/styles/tailwind.css';
import '@/styles/scss/main.scss';


function App({ Component, pageProps }) {
  const getLayout = Component?.getLayout ?? ((page) => page);

  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
    {getLayout(<Component {...pageProps} />)}
    <ReactQueryDevtools />
    </Hydrate>
    </QueryClientProvider>
    );
}
export default App;
