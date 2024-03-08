import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1800px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 2px solid #2c2c2c;

  @media (max-width: 1660px) {
    width: 85%;
    padding: 15.55px 0px;
    flex-direction: row-reverse;
  }

  @media(min-width: 1890px) {
    width: 97.5%;
  }

  @media(max-width: 1660px) {
    height: 80px;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
`;

export const Translation = styled.a`
  font-size: 1.3rem;
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
  border-bottom: 5px solid #000;

  @media(max-width: 1660px) {
    height: 90px;
    margin-left: 1em;
  }

  @media(max-width: 740px) {
    border-bottom: none;
  }
`;

export const Description = styled.a`
  color: #FFFF;
  font-size: 1rem;
  padding-left: 0.4rem;

  @media(max-width: 740px) {
    font-size: .7rem;
  }

`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const Logo = styled.div``;

export const Img = styled.img`
  @media (max-width: 740px) {
    width: 115.046px;
    height: 20.287px;
  }

  @media(max-width: 580px) {
    display: none;
  }
`;

export const LogMobile = styled.img`
  display: none;

  @media(max-width: 580px) {
    display: block;
    width: 33px;
  }
`

export const ContentNav = styled.div`
  display: flex;
  align-items: center;
`

export const ImgUnion = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContainerButton = styled.div`
  @media(max-width: 1660px) {
    display: none;
  }
`;

