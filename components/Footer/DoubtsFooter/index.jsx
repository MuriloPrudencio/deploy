import React from 'react'
import { Container, Title, Paragraph, ContainerLink, Ul, Ancora, Li, Icon } from './style'
import Link from 'next/link'
import { FiChevronRight } from "react-icons/fi";
import Accordion from '../AccordionFooter';

const accordionItems = [
    {
      title: 'Item 1',
      content: 'Content for Item 1',
    },
    {
      title: 'Item 2',
      content: 'Content for Item 2',
    },
    {
      title: 'Item 3',
      content: 'Content for Item 3',
    },
];

export default function Duvidas () {
    return (
        <Container>
            <Title>DÚVIDAS FREQUENTES</Title>
            <Paragraph>Lorem enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip lorem enim lorem enim ad minim veniam</Paragraph>
            <ContainerLink>
                <Accordion items={accordionItems}/>
            </ContainerLink>
        </Container>
    )
}