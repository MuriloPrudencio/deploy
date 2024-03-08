import styled from "styled-components";


export const Container = styled.div`
  width: 70%;
  display:flex;

  @media(max-width: 853px) {
    display: none;
  }
`;

export const Item = styled.div`
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
`;
export const Title = styled.div`
  color: #FFFFFF;
  text-align: start;
  font-size: 2rem;
  font-family: MontSerrat;
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 0.8rem;

  @media(max-width: 1365px) {
    font-size: 1.2rem;
  }
`;
export const SecondTitle = styled.div`
  color: #EFA144;
  text-align: start;
  font-size: 3rem;
  font-family: MontSerrat;
  font-weight: 800;
  text-transform: uppercase;

  @media(max-width: 1365px) {
    font-size: 1.2rem;
  }
`;

export const SubTitle = styled.h3`
    text-align: start;
    text-transform: uppercase;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media(max-width: 482px) {
        text-align: center;
        font-size: 13.5px;
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

    @media(max-width: 1319px) {
      width: 25rem;
      height: 30rem;
    }
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

