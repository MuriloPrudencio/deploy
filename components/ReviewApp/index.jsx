import { React, useState, useEffect } from "react";
import {
  Container,
  Content,
  Security,
  ContainerSecurity,
  Title,
  Span,
  Paragraph,
  ImgArmor,
  Button,
  SecondLineParagraph,
  ContainerReview,
  TitleReview,
  ParagraphReview
} from "./style";
import ReviewSlide from "../ReviewSlide";
import { withNamespaces } from 'react-i18next';
import { Trans } from 'react-i18next';

function ReviewApp({t}) {
  const review = {
    name: "João Silva",
    profession: "Designer",
    rating: 5,
    comment: '"Excelente trabalho! Recomendo a todos.',
    details:
      'O João foi muito profissional e entregou o projeto no prazo. Relacionamento excepcional, com ótimo atendimento durante todo o processo de jogo"',
    avatar: "customer.jpeg",
  };

  return (
    <Container>
      <Content>
        <ContainerSecurity>
          <Security src="/images/logos/security-1.png" />
          <Title>
            <Trans i18nKey="security">
              O seu jogo muito <Span>mais seguro</Span>
            </Trans>
          </Title>
          <Paragraph>{t('A segurança dos players sempre vem em 1° lugar!')}</Paragraph>
          <Button onClick={() => window.open("https://securitypkr.com.br/")}>
            {t('acesse agora')}
          </Button>
        </ContainerSecurity>
        <ImgArmor src="/images/escudo.png" />
        {/* <ReviewSlide review={review} />
        <ContainerReview>
          <TitleReview>Quem conhece</TitleReview>
          <TitleReview>
            <Span>recomenda</Span>
          </TitleReview>
          <ParagraphReview>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque iaculis nunc vel massa condimentum, vulputate elementum
            ante ultricies. Pellentesque egestas suscipit imperdiet. Nunc purus
            ante, commodo a iaculis at, accumsan rutrum lectus. Donec tristique,
            nibh quis finibus sollicitudin, erat eros aliquet augue, ac finibus
            nisi tellus ac nunc.
          </ParagraphReview>
          <Button onClick={() => window.open("https://securitypkr.com.br/")}>
            acesse agora
          </Button>
        </ContainerReview> */}
      </Content>
    </Container>
  );
}

export default withNamespaces()(ReviewApp)
