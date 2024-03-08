import React, { useState, useRef } from "react";
import { Ancora, Container, ContainerMidias, Content, Explication, Midias, Nav, Navigator, Networks, Policy, SubTitle, Img, Download, App, AppImg, ButtonAPK, Paragraph, Button } from "./style";
import Link from "next/link";
import { withNamespaces } from 'react-i18next';
import  ModalAPK  from "../Modal";

function Navigation ({t}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <Container>
            <Content>
                <Nav>
                    <Navigator>
                        <Link href="/">
                            <Ancora >{t('home')}</Ancora>
                        </Link>
                        <Link href="/tournament">
                            <Ancora>{t('torneios')}</Ancora>
                        </Link>
                        <Link href="/ranking">
                            <Ancora>{t('ranking')}</Ancora>
                        </Link>
                        <Link href="/blog">
                            <Ancora>{t('blog e notícias')}</Ancora>
                        </Link>
                        <Link href="/about">
                            <Ancora>{t('sobre')}</Ancora>
                        </Link>
                        {/* <Link href="/voceMaisUmAcompanhante">
                            <Ancora>{t('você + um acompanhante')}</Ancora>
                        </Link> */}
                    </Navigator>

                    <Explication>
                        <Link href='/jackPot'>
                            <Ancora>
                                {t('regras jackpot')}
                            </Ancora>
                        </Link>
                        <Link href='/generalRules'>
                            <Ancora>
                                {t('regulamento geral')}
                            </Ancora>
                        </Link>
                        <Link href='/communityRules'>
                            <Ancora>
                               {t('regras da comunidade')}
                            </Ancora>
                        </Link>
                        <Link href='/brandRules'>
                            <Ancora>
                                {t('regras da marca')}
                            </Ancora>
                        </Link>
                        {/* <Link href=''>
                            <Ancora>
                                software proíbido
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                regras das salas
                            </Ancora>
                        </Link> */}
                    </Explication>

                    <Policy>
                        <Link href='/termsAndConditions'>
                            <Ancora>
                                {t('termos e condições')}
                            </Ancora>
                        </Link>
                        <Link href='/privacyPolicy'>
                            <Ancora>
                                {t('política de privacidade')}
                            </Ancora>
                        </Link>
                        {/* <Link href=''>
                            <Ancora>
                                preferências de privacidade
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                jogo responsavel
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                ajuda
                            </Ancora>
                        </Link> */}
                    </Policy>
                </Nav>
                <Networks>
                    <ContainerMidias>
                        <SubTitle>
                            {t('siga-nos nas redes sociais')}
                        </SubTitle>

                        <Midias>
                            <Link href='https://www.facebook.com/Supremabrazil' target='_blank'>
                                <Img src='/images/icons/facebook.png' alt='facebook suprema'/>
                            </Link>
                            <Link href='https://www.instagram.com/supremabrazil/' target='_blank'>
                                <Img src='/images/icons/insta.png' alt='instagram suprema'/>
                            </Link>
                            <Link href='https://www.linkedin.com/company/supremagaming' target='_blank'>
                                <Img src='/images/icons/in.png' alt='linkedin suprema'/>
                            </Link>
                            <Link href='https://www.tiktok.com/@supremagamingco' target='_blank'>
                                <Img src='/images/icons/tiktok.png' alt='tik tok suprema'/>
                            </Link>
                            <Link href='https://twitter.com/Supremagamingco' target='_blank'>
                                <Img src='/images/icons/twt.png' alt='twitter/x suprema'/>
                            </Link>
                        </Midias>
                    </ContainerMidias>
                    <Download>
                        <SubTitle>
                            {t('baixe o app')}
                        </SubTitle>
                        <App>
                            {/* <ButtonAPK onClick={handleOpenModal}>
                                <AppImg  src='/images/icons/apk_white.png' alt=''/>
                            </ButtonAPK> */}
                            <Link href='https://play.google.com/store/apps/details?gl=US&hl=pt_BR&id=com.opt.supremapoker&ut[…]p_emkt_1mbattlehr_1608&utm_medium=email&utm_source=RD+Station' target='_blank'>
                                <AppImg src='/images/icons/playStore.png' alt=''/>
                            </Link>
                            <Link href='https://apps.apple.com/br/app/suprema-poker/id1583176410' target='_blank'>
                                <AppImg src='/images/icons/appleStore.png' alt=''/>
                            </Link>
                            <Link href='https://www.supremapoker.net/download/supremapoker.exe' target='_blank'>
                                <AppImg src='/images/icons/windows.png' alt=''/>
                            </Link>
                        </App>
                        <ModalAPK isOpen={isModalOpen} onClose={handleCloseModal}>
                            <Paragraph> 1) Clique em “Download do arquivo APK” </Paragraph>
                            <Paragraph> 2) Após abrir o pop-up, selecione “Baixar”</Paragraph>
                            <Paragraph> 3) Nas configurações do seu celular, clique em “Sobre o Telefone” </Paragraph>
                            <Paragraph> 4) Em seguida, selecione “Informações de Software”</Paragraph>
                            <Paragraph> 5) Nesta aba, clique 7 vezes em “Número de Compilação”, até abrir uma janela solicitando a senha do celular. Informe-a e, em seguida, aguarde a mensagem “O modo de desenvolvedor foi ativado” </Paragraph>
                            <Paragraph> 6) Na lupa de pesquisa, em “Configurações”, digite “Apps Desconhecidos” </Paragraph>
                            <Paragraph> 7) Clique na opção “Segurança e Privacidade” e, depois, em “Instalar apps desconhecidos”</Paragraph>
                            <Paragraph> 8) Habilite o acesso à opção “Meus Arquivos” </Paragraph>
                            <Paragraph> 9) Abra o Gerenciador de Arquivos do seu celular, clique no arquivo APK e, quando aparecer o pop-up, selecione “Instalar” </Paragraph>
                            <Paragraph> 10) Pronto! O app foi instalado. </Paragraph>
                            <Paragraph> Agora, é só realizar o seu cadastro!</Paragraph>
                            <Link href='https://supremapoker.net/download/suprema_v123.apk' target='_blank'>
                                <AppImg src='/images/icons/apk_black.png' alt=''/>
                            </Link>
                            <Button onClick={handleCloseModal}>Fechar</Button>
                        </ModalAPK> 
                    </Download>
                </Networks>
            </Content>
        </Container>
    )
    
}

export default withNamespaces()(Navigation)