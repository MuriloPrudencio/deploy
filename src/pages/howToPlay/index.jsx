import React from 'react';
import DescriptionTabs from '../../../components/Tabs/DescriptionTabsFairPlay';
import DescriptionTabsProtectApp from '../../../components/Tabs/DescriptionTabsProtectApp';
import DescriptionTabsHelp from '../../../components/Tabs/DescriptionTabsHelp/Index';
import LiningHighDownload from '../../../components/LiningHighDownload';
import styled from "styled-components";
import CookieBanner from '../../../components/Cookies/CookieBanner';

const Container = styled.div`
  display: flex;
  margin-left: 8.5rem;
  margin-top: 2rem;
  align-items: flex-start;
  justify-content: space-between;
  height: calc(380vh - 100px);
  max-height: calc(400vh - 100px)
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  padding: 20px;

  @media(min-width: 1890px) {
    max-width: 1800px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const HowToPlay = () => {
  return (
    <Container>
      <Content>
        <DescriptionTabs />
        <DescriptionTabsProtectApp />
        <DescriptionTabsHelp />
        <LiningHighDownload />
      </Content>
      <CookieBanner />
    </Container>
  );
};
export default HowToPlay;