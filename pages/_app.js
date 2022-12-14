import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import { Global, css } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/components/layout'
import MiniWindow from '../src/components/home/MiniWindow';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Global
          styles={css`
          body {
            fontFamily: 'Noto Sans TC';
          }  
          ul {
            list-style: none;
          }
          li {
            padding: 0;
          }
          p {
            margin: 0;
          }

         `}
        />
        <Layout>
          <Component {...pageProps} />
          <MiniWindow />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};