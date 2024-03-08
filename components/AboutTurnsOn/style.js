import styled from "styled-components";


export const Content = styled.div`
  justify-content: center;
  display: flex;
  padding-bottom: 6rem;
`;

export const Title = styled.h1`
  width: 45%;
  font-size: 60px;
  font-family: "Rem";
  font-weight: 700;
  text-transform: uppercase;

  @media(max-width: 947px) {
    width: 69%;
    font-size: 50px;
  }

  @media(max-width: 885px) {
    width: 74%;
    font-size: 50px;
  }

  @media(max-width: 717px){
    font-size: 40px;
  }

  @media(max-width: 541px){
    font-size: 31px;
  }
`;

export const Span = styled.span`
  color: #efa144;
`;
