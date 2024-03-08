import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const AccordionHeader = styled.div`
  background-color: #000;
  text-align: start;
  font-family: 'REM', sans-serif;
  font-size: 1.2rem;
  padding: 10px;
  cursor: pointer;

  
`;

export const AccordionContent = styled.div`
  padding: 10px;
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  text-align: start;
`;
