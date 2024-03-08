import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 10rem;
  background-image: url(images/back-mask.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Content = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 5rem;

  @media(max-width: 775px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h1`
  width: 45%;
  font-size: 60px;
  font-family: "Rem";
  font-weight: 700;
  text-transform: uppercase;
`;

export const Span = styled.span`
  color: #efa144;
`;

export const SupBrazil = styled.div`
  align-items: center;
`;

export const Card = styled.a`
  width: 370px;
  height: 340px;
  background-color: #2c2c2c;
  border-radius: 1rem;
`;
