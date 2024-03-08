import React, { useState, useEffect } from "react";
import {
  Item,
  Title,
  Container,
  SecondTitle,
  Download,
  App,
  Paragraph,
  SecondParagraph,
  ThirdParagraph
} from "./style";

import ButtonDownloadGlobal from "../DeviceRedirectButton";
import { withNamespaces } from 'react-i18next';

function AboutMainSeries  ({t}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Altere esse valor conforme necessário
    };

    handleResize(); // Verificar o tamanho inicial da janela
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <Item>
        <Title>{t('Principais')}</Title>
        <SecondTitle>{t('Series Suprema')}</SecondTitle>
        <Paragraph>
          {t('Torneios criados por especialistas')}
        </Paragraph>
        <SecondParagraph>
        {t('pensam nas melhores estruturas para')}
        </SecondParagraph>
        <ThirdParagraph>
          {t('atender todos os clientes')}
        </ThirdParagraph>
        <Download>
          <App>
            <ButtonDownloadGlobal isMobile={isMobile} />
          </App>
        </Download>
      </Item>
    </Container>
  );
};

export default withNamespaces()(AboutMainSeries);
