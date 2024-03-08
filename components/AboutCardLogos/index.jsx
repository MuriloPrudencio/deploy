import React from "react";
import {
  Container,
  Card,
  Title,
  Description,
  ContainerCards,
  SecondCard,
  ContainerLogos,
} from "./style";
import LogoSvg from "../LogoSvg";
import AboutLogoGrid from "../AboutLogoGrid";

const AboutCardLogos = () => {
  return (
    <Container>
      <ContainerCards>
        <Card />
        <SecondCard>
          <AboutLogoGrid />
        </SecondCard>
      </ContainerCards>
    </Container>
  );
};

export default AboutCardLogos;
