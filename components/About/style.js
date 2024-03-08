import styled from "styled-components";

export const Container = styled.div`
  width: 88%;
  height: 100%;
`;

export const Content = styled.div`
  margin: 2em 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 700px;
  float: left;
`;

export const AboutContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 1039px) {
    width: 75%;
  }
`;

export const Logo = styled.img`
  width: 253px;
  margin: .5em 0em;
`;

export const Paragraph = styled.p`
  width: 100%;
  text-align: justify;
  margin: 0.2em 0em;
  font-size: 15px;
  font-family: Inter;

  @media(max-width: 1660px){
    width: 90%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: start;
  padding-top: 2rem;
`;

export const Title = styled.h2`
  text-align: left;
  margin: 0.2em;
`;
