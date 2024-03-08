import { useState, useEffect } from 'react';
import { SlideshowContainer, Slide, DotsContainer, Dot} from './styled';

const images = [
  '/images/cantores/cesar-menotti.png',
  '/images/cantores/mumuzinho.png',
  '/images/cantores/otavio-raphael.png',
];

export default function Slideshow () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 3000); // Avança para o próximo slide a cada 3 segundos

    return () => {
      clearInterval(timer); // Limpa o temporizador quando o componente é desmontado
    };
  }, []);

  return (
    <SlideshowContainer>
      {images.map((image, index) => (
        <Slide key={index} active={index === currentIndex} style={{ backgroundImage: `url(${image})` }} />
      ))}
      <DotsContainer>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
        ))}
      </DotsContainer>
    </SlideshowContainer>
  );
};
