import styled from "styled-components";

export const Container = styled.div`
  background-color: #2c2c2c;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5em 0em;
`;

export const Content = styled.div`
  width: 88%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media(min-width: 1890px) {
    max-width: 1800px;
  }

  @media (max-width: 1533px) {
    justify-content: center;
    gap: 5em;
  }
`;

export const ContainerSecurity = styled.div`
  width: 50%;
  text-align: justify;

  @media (max-width: 1533px) {
    width: 80%;
  }

  @media (max-width: 829px) {
    width: 90%;
  }
`;

export const Security = styled.img`
  @media (max-width: 829px) {
    width: 60%;
  }
`;

export const Title = styled.h2`
    width: 70%;
    text-align: left;
    font-family: 'REM', sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

    @media(max-width: 667px) {
        font-size: 25px;
    }

    @media(max-width: 466px) {
        width: width: 91%;
        font-size: 20px;
        margin-top: .5em;
    }
`;

export const Span = styled.span`
  color: #efa144;
  padding-bottom: 2rem;
`;

export const Paragraph = styled.p`
  width: 70%;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.2em;

  @media (max-width: 466px) {
    margin-top: 0.5em;
  }
`;


export const Button = styled.a`
  background-color: transparent;
  border: 1px solid #FFFF;
  padding: 0.7rem 2.5rem 0.7rem 2.5rem;
  border-radius: 5px;
  color: #FFFFFF;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 0.5rem;
  font-size: 12px;
  margin-top: 2rem;
`;
