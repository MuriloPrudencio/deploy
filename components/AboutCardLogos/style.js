import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

export const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.a`
  position: relative;
  align-items: center;
  width: 450px;
  height: 273px;
  background-color: #2c2c2c;
  border-radius: 1rem;
  border: 1px solid #ffff;

  @media(max-width: 523px) {
    width: 345px;
    height: 215px;
  }
`;
export const SecondCard = styled.a`
  position: absolute;
  bottom: 1.5rem;
  right: 30px;
  width: 200px;
  height: 400px;
  align-items: center;
  width: 450px;
  height: 273px;
  background-color: #2c2c2c;
  border-radius: 1rem;
  border: 1px solid #ffff;

  @media(max-width: 523px) {
    width: 370px;
    height: 212px;
  }
`;

export const Icon = styled.a`
  width: 370px;
  height: 340px;
  background-color: #2c2c2c;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  color: #efa144;
  font-size: 100px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const Description = styled.h3`
  color: #efa144;
  font-size: 35px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
`;
