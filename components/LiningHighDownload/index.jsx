import React, { useState, useEffect } from "react";
import {
  Item,
  Title,
  Container,
  SecondTitle,
  Download,
  CellPhoneTrunkImg,
  App,
  AppImg,
} from "./style";
import { withNamespaces } from 'react-i18next';

import Link from "next/link";
import ButtonDownload from "../ButtonDownload";

function LiningHighDownload  ({t}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Altere esse valor conforme necessário
    };

    handleResize(); // Verificar o tamanho inicial da janela
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Container>
      <Item>
        <Title>{t('Venha forrar na')}</Title>
        <SecondTitle>{t('Maior liga')}</SecondTitle>
        <SecondTitle>{t('De poker do')}</SecondTitle>
        <SecondTitle>{t('Mundo')}</SecondTitle>
        <Download>
          <App>
            <ButtonDownload isMobile={isMobile} />
          </App>
        </Download>
      </Item>
      <CellPhoneTrunkImg src='/images/trunkSmart.png' alt="Smartphone com app aberto, ao lado um baú"></CellPhoneTrunkImg>
    </Container>
  );
};

export default withNamespaces()(LiningHighDownload);
