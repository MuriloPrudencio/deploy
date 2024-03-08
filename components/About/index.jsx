import React, { useState, useEffect } from "react";
import {
  AboutContent,
  Container,
  Content,
  Img,
  Logo,
  Paragraph,
  ContainerButton,
  Title
} from "./style";

import ButtonDownloadGlobal from "../DeviceRedirectButton";
import { withNamespaces } from 'react-i18next';

function Sobre({t}) {
  return (
    <Container>
      <Content>
        <Img src="/images/logos/ilustraAbout.png" />
        <AboutContent>
          <Logo src="/images/logos/logoAbout.png" />
          <Paragraph>
            {t('Desde 2018, a Suprema Poker conta com várias modalidades')}
          </Paragraph>
          <Paragraph>
            {t('Os torneios são de R$ 1 a R$ 10 mil')}
          </Paragraph>
          <Paragraph>
            {t('Nós somos o poker!')}
          </Paragraph>
          <Title>
            {t('SOBRE O APP')}
          </Title>
          <Paragraph>
            {t('Aliando credibilidade à melhor tecnologia de ponta do mercado, o app Suprema Poker foi desenvolvido para garantir a segurança dos players através de um sistema original e eficiente.')}
          </Paragraph>
          <Paragraph>
            {t('O aplicativo conta com 9 modalidades e suas variações:')}
          </Paragraph>
          <Paragraph>
            {t('- NLH, 6+NLH ')}
          </Paragraph>
          <Paragraph>
            {t(' - PLO4 (6+ PLO4, PLO4 H/L), PLO5 (H/L) e PLO6;')}
          </Paragraph>
          <Paragraph>
            {t('- Modalidades de pot limit Omaha com variações de 4 a 6 cartas;')}
          </Paragraph>
          <Paragraph>
            {t('- OFC (Open Face Chinese).')}
          </Paragraph>
          <Paragraph>
            {t('Nos ring games, o jogo começa a partir de 0,10/0,20 até 50/100, nas mais diversas modalidades, com mais de 1.500 mesas disponíveis a todo momento.')}
          </Paragraph>
          <Paragraph>
            {t('No Sit’n’Go, os buy-ins variam de 1,00 até 1.000,00, disponíveis em NLH, PLO’s e NLH+6, com mais de 3.000 mesas diárias.')}
          </Paragraph>
          <Paragraph>
            {t('A Suprema garante o entretenimento dos players com 3 séries na grade:')}
          </Paragraph>
          <Paragraph>
            {t('Koss')}
          </Paragraph>
          <Paragraph>
            {t('Suprema Micro Series')}
          </Paragraph>
          <Paragraph>
            {t('Suprema Poker Series')}
          </Paragraph>
          <Paragraph>
            {t('Junte-se a maior comunidade do poker on-line e jogue de forma segura. Afinal, nós somos o poker! Isso é Suprema!')}
          </Paragraph>
          <ContainerButton>
            <ButtonDownloadGlobal />
          </ContainerButton>
        </AboutContent>
      </Content>
    </Container>
  );
}

export default withNamespaces()(Sobre);
