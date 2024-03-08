import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { DropdownContainer, DropdownButton, DropdownContent, DropdownItem } from './styled';
import { withNamespaces } from 'react-i18next';

const data = [
    {
        id : 1,
        name : 'regulamento geral',
        link : '/generalRules',
    },
  
    {
        id : 2,
        name : 'regras jackpot',
        link : '/jackPot',
    },
]


function Dropdown  ({t})  {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('down');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setArrowDirection(isOpen ? 'down' : 'up');
  };

  return (
    <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
           {t(`REGRAS`)} {arrowDirection === 'down' ? <FaChevronDown /> : <FaChevronUp />}
        </DropdownButton>
        <DropdownContent  open={isOpen}> 
            {data.map((item) => (
                <DropdownItem key={item.id} href={`${item.link}`}>{t(`${item.name}`)}</DropdownItem>
            ))}
        </DropdownContent>
    </DropdownContainer>
  );
};

export default withNamespaces()(Dropdown);