import React, { useEffect, useState, useRef } from 'react';
import { GalleryContainer, ImageContainer, Img, ImageContent, Container, ContainerOptions, Button } from './styled';
import ShareButtons from './Share';
import axios from 'axios';
import SelectComponent from './SelectTag';
import SelectComponentDate from './SelectDate';
import styled from 'styled-components';
import Slider from "react-slick";

const Over = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;


`;

const FImg = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;

`;

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null); // Estado para controlar a imagem selecionada
  const [selectedIndex, setSelectedIndex] = useState(0); // Estado para rastrear o índice da imagem exibida
  const [images, setImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionDate, setSelectedOptionDate] = useState('');
  const pageCounter = useRef(1);
  const loading = useRef(false);
  const hasMoreImages = useRef(true);

  const fetchImages = async (pageNum) => {
    if (loading.current || !hasMoreImages.current) return;

    if (selectedOption && selectedOptionDate) {
      const apiUrl = `https://api.pokerbyte.com.br/photogalery/list/${selectedOptionDate}/${selectedOption}/${pageNum}`;

      try {
        loading.current = true;

        const response = await axios.get(apiUrl, {
          headers: {
            'Accept': 'application/json',
          },
        });

        const responseData = response.data;

        if (responseData && Array.isArray(responseData.data)) {
          const newImages = responseData.data.map((item) => item.nome);

          if (newImages.length === 0) {
            // Não há mais imagens para carregar
            hasMoreImages.current = false;
          } else {
            setImages((prevImages) => [...prevImages, ...newImages]);
            pageCounter.current = pageNum;
          }
        } else {
          console.error('A estrutura da resposta da API não corresponde ao esperado.');
        }
      } catch (error) {
        console.error('Erro ao buscar imagens', error);
      } finally {
        loading.current = false;
      }
    }
  };

  useEffect(() => {
    // Reset images and pagination when options change
    setImages([]);
    pageCounter.current = 1;
    hasMoreImages.current = true;
    fetchImages(pageCounter.current);
  }, [selectedOption, selectedOptionDate]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      fetchImages(pageCounter.current + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   const openImage = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  // Função para fechar a imagem em tela cheia
  const closeImage = () => {
    setSelectedImage(null);
  };

  

  return (
    <Container>
      <ContainerOptions>
        <SelectComponent onSelectChange={(selected) => setSelectedOption(selected)} />
        <SelectComponentDate onSelectChangeDate={(selected) => setSelectedOptionDate(selected)} />
      </ContainerOptions>
      <GalleryContainer>
        {images.map((image, index) => (
          (selectedOption && selectedOptionDate) ? (
            <ImageContainer key={index} onClick={() => openImage(`https://lk.plus/images/` + image, index)}>
              <ImageContent>
                <Img src={`https://lk.plus/images/` + image} alt={`Aniversário Suprema 5 Anos`} />
              </ImageContent>
            </ImageContainer>
          ) : null
        ))}
      </GalleryContainer>
      {images.length > 0 && hasMoreImages.current && (
        <Button onClick={() => fetchImages(pageCounter.current + 1)}>Carregar Mais</Button>
      )}
      {selectedImage && (
        <Over className="fullscreen-overlay" onClick={closeImage}>
          <FImg src={selectedImage} alt="Imagem em Tela Cheia" />
        </Over>
      )}
    </Container>
  );
}

export default ImageGallery;







