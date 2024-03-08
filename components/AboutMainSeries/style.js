import styled from "styled-components";


export const Container = styled.div`
  width: 70%;
  display:flex;
`;

export const Item = styled.div`
align-items:start;
  margin-top: 40px;
  width: 100%;
  display: inline-block;
  word-break: break-word;
  border-radius: 2rem;
  padding-left:5rem;
  padding-right:5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  
  @media (max-width: 760px) {
   font-size: 12px;
  }

  @media(max-width: 523px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }

`;
export const Title = styled.div`
  color: #FFFFFF;
  text-align: start;
  font-size: 3.5rem;
  font-family: 'Rem';
  font-weight: 700;
  text-transform: uppercase;

  @media(max-width: 523px) {
    font-size: 1.5rem;
  }

`;
export const SecondTitle = styled.div`
  color: #EFA144;
  text-align: start;
  font-size: 3.5rem;
  font-family: 'Rem';
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 0.8rem;

  @media(max-width: 523px) {
    font-size: 1.5rem;
  }
`;


export const App = styled.div`
    display: flex;

    @media(max-width: 482px){
        flex-direction: column;
        align-items: center;
    }
`;

export const CellPhoneTrunkImg = styled.img`
width: 35rem;
`;

export const AppImg = styled.img`
    margin-top: .5em;
    width: 155px;
    height: 51px;

    @media(max-width: 650px) {
        width: 110px;
        height: 37px;
    }
`;

export const Download = styled.div`

@media(max-width: 998px) {
    margin: auto;
    width: 55%;
}
`;

export const Paragraph = styled.p`
  text-align: start;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.2em;

  @media(max-width: 523px) {
    font-size: 16px;
  }
`;
export const SecondParagraph = styled.p`
  text-align: start;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media(max-width: 523px) {
    font-size: 16px;
  }

`;
export const ThirdParagraph = styled.p`
  text-align: start;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 2rem;

  @media(max-width: 523px) {
    font-size: 16px;
  }
`;

