import styled from "styled-components";


export const Container = styled.div`
  width: 50%;
  display:flex;
  align-items: center;
`;

export const Item = styled.div`
  width: 50%;
  align-items: inherit;
  flex-direction: column;
  border-radius: 2rem;
  
  @media (max-width: 760px) {
   font-size: 12px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const TextPrimary = styled.div`
  margin-top: 1.5rem;
  color: white;
  text-align: start;
  font-size: 0.7rem;
`;
export const Text = styled.div`
  color: white;
  text-align: start;
`;
export const Title = styled.div`
  color: #EFA144;
  text-align: start;
  font-size: 1rem;
  font-family: MontSerrat;
  font-weight: 800;
  text-transform: uppercase;
`;
export const TitleApp = styled.div`
  color: #FFFF;
  padding-bottom: 3rem;
  text-align: start;
  font-size: 1.5rem;
  font-family: MontSerrat;
  font-weight: 800;
  text-transform: uppercase;
`;
export const SecondTitle = styled.div`
  margin-top: 2rem;
  color: #EFA144;
  text-align: start;
  font-size: 1rem;
  font-family: MontSerrat;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Security = styled.img`
`;

export const Span = styled.span`
    color: #EFA144;
`;

export const ContainerSecurity = styled.div`
    width: 100%;
    text-align: justify;

    @media(max-width: 1533px) {
        width: 80%;
    }

    @media (max-width: 829px){
        width: 90%;
    }
`;

export const Paragraph = styled.p`
    width: 100%;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 1.5rem;
`;

export const Button = styled.a`
    background-color: #EFA144;
    padding: 1.2rem;
    border-radius: 5px;
    color: #000;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;

    &:hover{
        background-color: #ca8734;
    }
`;
