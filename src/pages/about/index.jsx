import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import About from "../../../components/About";
import LiningHighDownload from "../../../components/LiningHighDownload";
import CardAbout from "../../../components/CardAbout";
import styled from "styled-components";
import AboutLogosSup from "../../../components/AboutLogosSup";
import AboutMainSeries from "../../../components/AboutMainSeries";
import CookieBanner from "../../../components/Cookies/CookieBanner";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  @media(min-width: 1890px) {
    max-width: 1800px;
  }
`;

const Content = styled.div``;

export default function Contact() {
  return (
    <Container>
      <Content>
        <About />
        <CardAbout />
        <AboutLogosSup />
        <AboutMainSeries />
        <LiningHighDownload />
      </Content>
      <CookieBanner />
    </Container>
  );
}
