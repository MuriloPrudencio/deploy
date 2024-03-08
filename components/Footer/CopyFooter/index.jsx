import React from 'react';
import { Container, ContainerImg, Content, Img, Paragraph, Section } from './styled';
import Link from 'next/link';
import { withNamespaces } from 'react-i18next';

function Copy ({t}) {

    return (
        <Container>
            <Content>
                <Section>
                    <Paragraph>
                        {t('2023 | TODOS OS DIREITOS RESERVADOS')}
                    </Paragraph>
                    <Paragraph>
                        Endereço: Rua Saldanha Marinho, 804, Sala 13 C, Centro, Itapetininga/SP, CEP 18.200-001
                        Canal de atendimento (informações): atendimento@suprema.group
                    </Paragraph>
                </Section>

                <Section>
                    <ContainerImg>
                        <Link href=''>
                            <Img src='/images/logos/LogoSuprema.png' alt='Logo Suprema Poker'/>
                        </Link>
                        <Link href=''>
                            <Img src='/images/security.png' alt='Security'/>
                        </Link>
                        <Link href=''>
                            <Img src='/images/certified.png' alt='Certified'/>
                        </Link>
                    </ContainerImg>
                </Section>
            </Content>
        </Container>
    )
}

export default withNamespaces()(Copy);