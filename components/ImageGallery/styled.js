import styled from "styled-components";

export const Container = styled.div``;


export const ContainerOptions = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin: 2em 0em;

    @media(max-width: 650px) {
      flex-direction: column;
    }
`;

export const GalleryContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

`;

export const ImageContent = styled.div`
  width: 347px;
  height: 440px;
  background: #fff;
  padding: 10px;

  @media(max-width: 600px) {
    width: 160px;
    height: 210px;
  }

`;

export const Button = styled.button`
  background: #EFA144;
  color: #000;
  padding: 0.5em 1em;
  border-radius: 10px;
  margin: 5em 0em;
  text-transform: uppercase;
`
