import React from "react";
import { EllipseContainer, Ellipse, Icon, Card, ContainerCard, Title, Subtitle } from "./style"; ////////////
import { withNamespaces } from 'react-i18next';

function EllipseIcons ({t}) {
  return (
    <>
    <ContainerCard>
      <Card>
      <Title>
        +300
      </Title>
      <Subtitle>
        {t('clubes')}
      </Subtitle>
      </Card>
      <Ellipse>
        <Icon src="Union.svg" alt="teste" />
      </Ellipse>
    </ContainerCard>
    <ContainerCard>
      <Card>
        <Title>
          +500K
        </Title>
        <Subtitle>
          {t('jogadores')}
        </Subtitle>
      </Card>
      <Ellipse>
        <Icon src="Group 90.svg" alt="teste" />
      </Ellipse>
    </ContainerCard>
      <ContainerCard>
      <Card>
        <Title>
          +70
        </Title>
        <Subtitle>
          {t('países')}
        </Subtitle>
      </Card>
      <Ellipse>
        <Icon src="Group 88.svg" alt="teste" />
      </Ellipse>
      </ContainerCard>
    </>
  );
};

export default withNamespaces()(EllipseIcons);

