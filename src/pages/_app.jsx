import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { CookieProvider } from '../context/CookieContext';
import '../../styles/globals.css';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Script from 'next/script'
import Menu from '../../components/Header';
import { LanguageProvider } from '../../LanguageProvider';
import "../i18n";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('G-2BHB3YXT1E');

    ReactGA.pageview(window.location.pathname);

    router.events.on('routeChangeComplete', (url) => {
      ReactGA.pageview(url);
    });
  }, []);

  return (
    <LanguageProvider>
      <Head>
        <title>Suprema Poker</title>
       </Head>
        <Menu />
        <Script id='ms_clarity'>

          {
            `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "iiqzucz6d3")
            
            `
          }
        </Script>
        <Script id='digisac'>
          {
            `
            window._digisac = {
                id: "d1bc67ae-6e8c-49c8-9346-fecede32f45c",
                payload: {
                  visibleButton: true,
                  startOpen: false,
              }
            };
            `
          }
        </Script>
        <Script src="https://webchat.digisac.app/embedded.js"></Script>
        <CookieProvider>
          <Component {...pageProps} />
        </CookieProvider>
        <Footer/>
    </LanguageProvider>
  )
}

export default MyApp;
