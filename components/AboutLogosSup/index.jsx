import React, { useState, useEffect } from "react";
import { Container, Content, Title, Span, SupBrazil,Card } from "./style";
import LogoSvg from "../LogoSvg";
import ButtonDownloadGlobal from "../DeviceRedirectButton";
import AboutCardLogos from "../AboutCardLogos";
import AboutTurnsOn from "../AboutTurnsOn";

const AboutLogosSup = () => {

  return (
    <Container>
    <AboutTurnsOn />
      <Content>
      <SupBrazil>
        <LogoSvg />
        <ButtonDownloadGlobal />
      </SupBrazil>
        <AboutCardLogos />
      </Content>
    </Container>
  );
};

export default AboutLogosSup;
