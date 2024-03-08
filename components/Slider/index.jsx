import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Content, Container, Presentation, Title, Paragraph } from "./style";

const images = [
  {
    id: 0,
    src: "/images/slide/ring.jpg",
    alt: "Regulamento Popo",
    /*img: '/images/blogTitle.png',*/
    title: ``,
    content: ``,
    href: "",
  },
  {
    id: 0,
    src: "/images/slide/generico.png",
    img: "Suprema Folia",
    alt: "Suprema Poker",
    /*img: '/images/blogTitle.png',*/
    href: "",
  },
  {
    id: 0,
    src: "/images/slide/koss.png",
    alt: "Serie Koss",
    title: ` `,
    content: ``,
    href: "https://koss.supremapoker.com.br",
  },
  {
    id: 0,
    src: "/images/slide/popo.png",
    alt: "Popo e Suprema",
    title: ` `,
    content: ``,
    href: "https://popo.supremapoker.com.br",
  }
];

export default function SliderHome() {

  return (
    <Container>
      <Content>
        <Carousel
          showArrows={false}
          swipeable={false}
          autoPlay={true}
          infiniteLoop={true}
          className="carousel-container"
        >
          {images.map((image, index) => (
            <Container key={index} onClick={() => window.open(`${image.href}`)}>
              <img src={image.src} alt={image.alt} />
              <Presentation>
                <Title>{image.title}</Title>
                <Paragraph>{image.content}</Paragraph>
              </Presentation>
            </Container>
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}
