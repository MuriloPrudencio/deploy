import React from "react";
import {
  Container,
  Content,
  ContentTitle,
  Logo,
  Img,
  Translation,
  ContainerNav,
  LogMobile,
  ContentNav,
  ContainerButton
} from "./style";
import Link from "next/link";
import ButtonDownloadGlobal from "../DeviceRedirectButton";
import Navbar from "../Nav";
import languageOptions from "../Nav/Translate/language";
import LanguageSelector from "../Nav/Translate";

export default function Header() {

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Logo>
            <Link href="/">
              <Img
                src="/images/logos/LogoSuprema.png"
                alt="Logo Suprema Poker"
              />
            </Link>
            <Link href="/">
              <LogMobile 
                src="/images/logos/logo-mobile.png"
                alt="Logo Suprema Poker" 
              />
            </Link>
          </Logo>
        </ContentTitle>
        <ContentNav>
          <ContainerNav>
            <Navbar/>
            <Translation>
              <LanguageSelector options={languageOptions}/>
            </Translation>
          </ContainerNav>
          <ContainerButton>
            <ButtonDownloadGlobal/>
          </ContainerButton>
        </ContentNav>
      </Content>
    </Container>
  );
}
