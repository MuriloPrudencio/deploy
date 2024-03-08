import React from 'react';
import { Banner, Button } from './styled';
import { useCookieContext } from '../../src/context/CookieContext';
import { Ancora } from './styled';
import { withNamespaces } from 'react-i18next';

function CookieBanner ({t}) {
  const { showBanner, acceptCookies } = useCookieContext();

  if (!showBanner) {
    return null;
  }

  return (
    <Banner>
      {t('Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa')} {''}
      <Ancora onClick={() => window.open(`https://supremapoker.com.br/privacyPolicy`)}>
        {t('Politica de Privacidade')}
      </Ancora> 
      {''} {t('e, ao continuar navegando, você concorda com')} {''} <Button onClick={acceptCookies}>{t('ACEITAR')}</Button>
    </Banner>
  );
};

export default withNamespaces()(CookieBanner)