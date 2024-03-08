import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { AnimatedText, Container, CustomSelect, Letter } from './styled';

const SelectComponentDate = ({ onSelectChangeDate }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptionDate, setSelectedOptionDate] = useState('');

  useEffect(() => {
    axios.get('https://api.pokerbyte.com.br/api/photogalery/datelist')
      .then((response) => {
        console.log(response)
        const data = response.data;
        const date = data.data
        
        setOptions(date.map((item) => ({
          id: item['DATE(dataGal)'],
          label: item['DATE(dataGal)'],
        })));
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados da API', error);
      });
  }, []);

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedOptionDate(selected);
    onSelectChangeDate(selected);
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
        {renderAnimatedText('#Selecione uma Data')}
      </AnimatedText>
      <CustomSelect>
        <select value={selectedOptionDate} onChange={handleSelectChange}>
          <option value="">Selecione uma opção</option>
          {options.map((option) => (
            <option key={option.id} value={moment(option.label).format('YYYY-MM-DD')}>
              {moment(option.label).format('DD/MM/YYYY')}
            </option>
          ))}
        </select>
      </CustomSelect>
    </Container>
  );
};

export default SelectComponentDate;
