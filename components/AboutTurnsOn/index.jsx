import React from "react";
import { Container, Content, Title, Span } from "./style";
import { withNamespaces } from 'react-i18next';
import { Trans } from 'react-i18next';

function AboutTurnsOn  ({t}) {
  return (
    <Content>
      <Title>
        <Trans i18nKey="maiorLigaDePoker">
          a maior <Span>liga de poker do mundo</Span>
        </Trans>
      </Title>
    </Content>
  );
};

export default withNamespaces()(AboutTurnsOn);
