// components/Accordion.js
import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./style";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {item.title}
          </AccordionHeader>
          <AccordionContent expanded={index === expandedIndex}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;