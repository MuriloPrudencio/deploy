import styled from "styled-components";

export const ContainerCard = styled.div `
  position: relative;
  align-items: center;
  margin: 0 auto;
  display: flex;
`;

export const Card = styled.div `
  width: 370px;
  height: 340px;
  background-color: #2C2C2C;
  display: flex;
  margin: 0 3rem;
  flex: 1;
  flex-direction: column;
  box-shadow: 7px 7px 7px 0px #00000059;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1 `
  color: #EFA144;
  font-size: 100px;
  font-family: Montserrat;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

export const Subtitle = styled.p `
  color: #EFA144;
  font-size: 35px;
  font-family: Montserrat;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export const Ellipse = styled.div`
  width: 201px; 
  height: 201px; 
  border-radius: 100%;
  background-color: #2C2C2C; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3rem; 
  box-shadow: 7px 7px 7px 0px #00000059;
  position: absolute;
  top: -7rem;
  left: 5.5rem;

  @media (max-width: 768px) {
    width: 101px; 
    height: 101px; 
    margin: 0 10px; 
  }
`;

export const Icon = styled.img`
    width: 100px; 
    height: 100px; 

    @media (max-width: 768px) {
      width: 30px; 
      height: 30px; 
    }
`;
