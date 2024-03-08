import styled from "styled-components";

export const Img = styled.img`
`;

export const Container = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  height: 100%;
  position: relative;
  top: 3em;

  @media(max-width: 1115px) {
    width: 90%;
  }
`;

export const ContainerImage = styled.div`
  position: absolute;
  text-align: center;
  margin-bottom: 22.5rem;
  margin-right: 0.4rem;
`;

export const ContainerImage2 = styled.div`
  position: absolute;
  align-items: start;
  margin-bottom: 22.9rem;
  margin-left: 54rem;
`;

export const ContainerImage3 = styled.div`
  position: absolute;
  align-items: start;
  margin-bottom:23rem;
  margin-right: 57rem;
`;
export const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 10rem;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 844px) {
    flex-direction: column;
    gap: 5%;
  }

  @media(max-width: 842px) {
    padding-top: 0rem;
  }
`;

export const Card = styled.a`
  align-items: center;
  width: 370px;
  height: 340px;
  background-color: #2C2C2C;
  border-radius: 1rem;

  @media(max-width: 1593px) {
    width: 300px;
    height: 270px;
  }

  @media(max-width: 1327px) {
    width: 250px;
    height: 220px;
  }

  @media(max-width: 844px) {
    margin-top: 6em;
  }
`;

export const Icon = styled.a`
  width: 370px;
  height: 340px;
  background-color: #2C2C2C;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  color: #EFA144;
  font-size: 100px;
  font-family: Montserrat;
  font-weight: 700;

  @media(max-width: 1691px) {
    font-size: 60px;
  }

  @media(max-width: 1593px) {
    position: relative;
    bottom: 0.5em;
  }

`;

export const Description = styled.h3`
  color: #EFA144;
  font-size: 35px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;

  @media(max-width: 1691px) {
    font-size: 20px;
  }

  @media(max-width: 1691px) {
    font-size: 14px;
    position: relative;
    bottom: 2.5em;
  }
`;


