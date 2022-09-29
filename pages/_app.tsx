import type { AppProps } from 'next/app';
import Global from '../styles/globals';
import Normalize from '../styles/normalize';
import Variables from '../styles/variables';

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Component {...pageProps} />
        <Variables />
        <Normalize />
        <Global />
    </>
}

export default MyApp
