import React, { useState, useEffect } from 'react';
import { SelectContainer, Img, NameSelect} from './styled';
import i18n from '../../../src/i18n';
import CustomSelect from 'react-select';

function LanguageSelector ({ options }) {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]); 

  const customStyles = {
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#EFA144',
      fontSize: '2em',
      padding: '0px',
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? '#000' : '#000',
      backgroundColor: '#000',
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: '#000', 
      borderColor: state.isFocused ? '#000' : '#000',
     
    }),
  };

  const handleChangeLanguage = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    i18n.changeLanguage(selectedOption.language);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.language);
  }, [selectedLanguage]);


  return (
    <SelectContainer>
      {/* <Img src='/images/icons/unions.png'/> */}
      <CustomSelect
        options={options}
        value={selectedLanguage}
        onChange={handleChangeLanguage}
        styles={customStyles}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.language}
        isSearchable={true}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#EFA144',
            primary: 'black',
          },
        })}
        formatOptionLabel={({ img }) => (
          <Img src={img}/>
        )}
      />
    </SelectContainer>
  );
};


export default LanguageSelector;