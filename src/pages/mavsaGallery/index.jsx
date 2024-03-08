import Gallery from "../../../components/ImageGallery";
import styled from "styled-components";

const Container = styled.div`
    margin: 3em 1em;
    max-width: 85%;
    min-height: 100vh;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }

    @media(max-width: 590px) {
      max-width: 95%;
    }
`;

const Title = styled.figure`
    margin: 2em 0em;
    width: 30vw;

    @media(max-width: 590px) {
      width: 75vw;
    }
`;

const Img = styled.img`
    width: 100%;
`;

function GalleryTeste() {
  return (
    <Container>
      <Title>
        <Img src="/images/logos/MAVSA.png"/>
      </Title>
      <Gallery/>
    </Container>
  );
}

export default GalleryTeste;