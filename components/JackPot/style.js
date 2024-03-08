import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 100px);
`;

export const Content = styled.div`
    max-width: 100%;
`;

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;


export const TitlePrincContainer = styled.section`
  text-align: center;
  padding-bottom: 1em;
`;

export const Title = styled.h1`
  color: #EFA144;
`;

export const DescriptionTitle = styled.div`
  text-align: center;
  margin: 1em;
  font-size: 18px;
  color: #fff;

   @media(max-width: 1128px) {
    font-size: 12px;
  }

  @media(max-width: 621px) {
    font-size: 9px;
  }
`;


export const SectionMainContainer = styled.section`
  margin: 1em auto;
  overflow-y: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #fff;
    padding: 10px;
    text-align: center;

    @media(max-width: 621px) {
    font-size: 9px;
  }
  }

  th {
    background-color: #424242;
    color: #fff;
    font-weight: bold;
  }

  tr:nth-child(odd) td.td {
    background: #424242;
    color: #fff;
  }

`;


export const SectionExampleContainer = styled.section`
  width: 89%;
  text-align: justify;
  line-height: 1em;
  margin: 1em auto;
  font-size: 18px;

  @media(max-width: 1128px) {
    font-size: 12px;
    text-align: center;
  }

  @media(max-width: 621px) {
    font-size: 9px;
  }
`;


export const CardsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
  gap: 2em;
`;

export const CardsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;

  @media(max-width: 1128px) {
    width: 60%;
  }

   @media(max-width: 689px) {
    width: 80%;
  }

  @media(max-width: 621px) {
    width: 100%;
  }
`;

export const CardsTitle = styled.div`
  padding: 2em;
  color: #EFA144;
`;

export const CardsPTwo = styled.div`
  text-align: center;
  border-top: 1px solid #fff;
  padding: 0.5em;
  font-size: 18px;

  @media(max-width: 1128px) {
    font-size: 12px;
  }

  @media(max-width: 621px) {
    font-size: 8px;
  }
`;

export const Imagem = styled.img`

  @media(max-width: 1128px) {
    width: 100px;
  }

  @media(max-width: 928px) {
    width: 50px;
  }

   @media(max-width: 520px) {
    width: 35px;
  }
`;
