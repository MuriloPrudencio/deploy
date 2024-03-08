import React from "react";
import {
  Container,
  Content,
  Title,
  Paragraph,
  Span,
  Img,
  Figure,
} from "./style";
import { withNamespaces } from 'react-i18next';
import { Trans } from 'react-i18next';

function PokerTable({t}) {
  return (
    <Container>
      <Content>
        <Title>
          <Trans i18nKey="maiorLigaB2B">
            <Span>A</Span> MAIOR LIGA B2B<Span>DE POKER DO</Span> MUNDO
          </Trans>
        </Title>
        <Paragraph>{t('Vem pra Suprema e desafie seus limites!')}</Paragraph>
      </Content>
      <Figure>
        <Img src="/images/pokerTable.png" alt="Mesa de Poker" />
      </Figure>
    </Container>
  );
}

export default withNamespaces()(PokerTable);
