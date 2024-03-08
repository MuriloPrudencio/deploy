import React from "react";
import {
  Item,
  TextPrimary,
  Text,
  Title,
  Container,
  SecondTitle,
  ContainerAccordion,
} from "./style";
import Accordion from "../../Accordion";

const accordionItems = [
  {
    title: "Verificação Etária",
    content:
      "lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element",
  },
  {
    title: "Autoexclusão",
    content:
      "lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element",
  },
  {
    title: "Restrição de Transações Financeiras",
    content:
      "lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element",
  },
  {
    title: "Monitoramento em Tempo Real",
    content:
      "lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element",
  },
  {
    title: "Políticas de Privacidade",
    content:
      "lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element",
  },
  {
    title: "Políticas de Cookies",
    content:
      "lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element, lorem ipsum dolor sit amet, consectetur adipis occurence dolore magnaldkfds auctor sit amet a ante del element",
  },
];
const DescriptionTabsFairPlay = () => {
  return (
    <Container>
      <Item>
        
          <Title >
           Um jogo justo para todos
          </Title>
        <TextPrimary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </TextPrimary>
        <SecondTitle>O que podemos fazer por você</SecondTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Text>
        <ContainerAccordion>
          <Accordion items={accordionItems} />
        </ContainerAccordion>
      </Item>
    </Container>
  );
};

export default DescriptionTabsFairPlay;
