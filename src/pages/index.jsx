import React from 'react';
import styled from "styled-components";
import SliderHome from '../../components/Slider';
import PokerTable from '../../components/PokerTable';
import Tournaments from '../../components/Tournaments';
import Blog from '../../components/Blog';
import ReviewApp from '../../components/ReviewApp';
import Birthday from '../../components/BirthdaySuprema';
import ReviewCard from '../../components/ReviewCard';
import ReviewSection from '../../components/ReviewSection';
import CookieBanner from '../../components/Cookies/CookieBanner';

const Container = styled.div`
  width: 100%; 
  height: calc(100% - 100px);

  @media(max-width: 749px) {
    width: 100%;
  }
`;

const ContainerSlide = styled.div`
  width: 88%; 
  
  @media(min-width: 1890px) {
    max-width: 1800px;
  }

  @media(max-width: 650px) {
    width: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  padding-top: 20px;
`;

const Slider = styled.div`
  width: 100%;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

const Img = styled.img``;

const ChipsOne = styled.img`
  width: 100px;
  position: absolute;
  left: 0;

  @media(min-width: 1890px){
    width: 160px;
  }

  @media(max-width: 800px){
    width: 60px;
  }
`;

const ContainerChips = styled.div`
  margin: 15%;

  @media(max-width: 1117px){
    margin: 23%;
  }

  @media(max-width: 723px){
    margin: 10%;
  }
`;

const ChipsTwo = styled.img`
  width: 80px;
  position: absolute;
  right: 0;

  @media(min-width: 1890px){
    width: 140px;
  }

  @media(max-width: 800px){
    width: 50px;
  }
`;

const ChipsThree = styled.img`
  position: relative;
  top: 13em;
  left: 7em;
  width: 145px;

  @media(min-width: 1890px){
    width: 150px;
  }

  @media(max-width: 800px){
    width: 60px;
    top: 4em;
    left: 3em;
  }

  @media(max-width: 600px) {
    top: 6em;
  }
`;


export default function Home() {
  return (
   <Container>
     <Content>
        <ContainerSlide>
          <Slider>
            <SliderHome/>
          </Slider>
        </ContainerSlide>
        <ChipsOne src='./images/ficha-01.png'/>
        <ContainerChips>
          <ChipsTwo src='./images/ficha-02.png'/>
        </ContainerChips>
        <PokerTable/>
          <ChipsThree src='./images/ficha-03.png' />
        <Tournaments/>
        {/* <Birthday/> */}
        <ReviewApp/>
        {/* <ReviewSection /> */}
        <Blog/>
     </Content>
     <CookieBanner />
   </Container>
  )
}
