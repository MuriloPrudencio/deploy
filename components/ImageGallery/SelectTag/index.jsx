import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AnimatedText, Container, CustomSelect, Letter } from './styled';

const SelectComponent = ({ onSelectChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    axios.get('https://api.pokerbyte.com.br/photogalery/taglist')
      .then((response) => {
        const data = response.data;
        const tag = data.data
        const tags = tag
        setOptions(tags.map((item) => ({
          id: item.tag,
          label: item.tag,
        })));
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados da API', error);
      });
  }, []);

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    onSelectChange(selected);
  };

  const renderAnimatedText = (text) => {
    return text.split('').map((letter, index) => (
      <Letter
        key={index}
        index={index}
        initialColor={index === 0 ? 'red' : 'initial'}
      >
        {letter}
      </Letter>
    ));
  };

  return (
    <Container>
      <AnimatedText>
        {renderAnimatedText('#Selecione um Evento')}
      </AnimatedText>
      <CustomSelect>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Selecione uma opção</option>
          {options.map((option) => (
            <option key={option.id} value={option.label}>
              {option.label.replace('&', ' ')}
            </option>
          ))}
        </select>
      </CustomSelect>
    </Container>
  );
};

export default SelectComponent;