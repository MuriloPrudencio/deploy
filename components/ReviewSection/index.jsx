import { React, useState, useEffect } from "react";
import {
  Container,
  Content,
  ContainerSecurity,
  Title,
  Span,
} from "./style";
import ReviewCard from "../ReviewCard";
import ButtonDownloadGlobal from "../DeviceRedirectButton";

const reviews = [
  {
    name: "Helena Grillo",
    photo: "/customer.jpeg",
    profession: "Jardineira",
    comment: '"Melhor experiência jogando poker online',
    secondComment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.”",
    stars: 5,
  },
  // Adicione mais avaliações aqui
];


export default function ReviewSection() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Altere esse valor conforme necessÃ¡rio
      };
  
      handleResize(); // Verificar o tamanho inicial da janela
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <Container>
      <Content>
        <ContainerSecurity>
          <Title>Quem conhece</Title>
          <Title>
            <Span>RECOMENDA</Span>
          </Title>
          <ButtonDownloadGlobal isMobile={isMobile} />
        </ContainerSecurity>
        {reviews.map((review, index) => (
          <ReviewCard key={index} customer={review} />
        ))}
      </Content>
    </Container>
  );
}
