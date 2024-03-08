import { React, useEffect } from 'react';
import { Content, Logo, Paragraph, Title, Span, Container, Button } from './styled';
import { withNamespaces } from 'react-i18next';
import { Trans } from 'react-i18next';

function Presentation ({t}) {
    
    return (
        <Container>
            <Logo src='/images/logos/5anos.png' alt='Logo 5 anos Suprema Poker'/>
            <Content>
                <Title>
                    <Trans i18nKey="presentationTitle">
                    Venha viver uma <Span>experiência inesquecível</Span> em um resort <Span>all-inclusive</Span> com a <Span>Suprema!</Span>
                    </Trans>
                </Title>
                <Paragraph>
                    {t('Atrações musicais, poker e diversão garantida para toda família.')}
                </Paragraph>
            </Content>
            <Button onClick={() => 
                window.open(`${window.navigator.language == 'pt-BR'? 'https://supremapoker.com.br/suprema-5-anos/' :''
                ||window.navigator.language == 'en' ? 'https://docs.google.com/forms/d/e/1FAIpQLSclzRemmd-ruTkVWM0GyaNcPhG7vjmlVqeD1B46eXmTAJebYg/viewform' : ''
                ||window.navigator.language == 'es' ? 'https://docs.google.com/forms/d/e/1FAIpQLSd-eBg_zZvVVNOEjl4v9VhYTE3Tr3RkHhlUPtWlYpUVu-vkvA/viewform' : ''
                }`)}>{t('reserve agora')}</Button>
        </Container>
    )
}

export default withNamespaces()(Presentation);