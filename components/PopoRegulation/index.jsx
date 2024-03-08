import React from "react";
import { withNamespaces } from 'react-i18next';
import { Ancora, Container, Content, Context, Markes, Paragraph, Span, Title } from "./styled";

function PopoRegulation ({t}) {

    const emailAddress = 'security@supremapoker.com.br';

    const handleEmailSac = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <Container>
            <Title>{t('PROMOÇÃO - VOCÊ + UM ACOMPANHANTE NA LUTA MAIS ESPERADA DO ANO')}</Title>
            <Content>
                <Markes>
                    {t('1. REGULAMENTO Promoção – você + um acompanhante na luta mais esperada do ano')}
                </Markes>
                <Paragraph>
                    {t('1.1. O presente regulamento tem como objetivo estabelecer as normas e diretrizes da Promoção – você + um acompanhante na luta mais esperada do ano.')}
                </Paragraph>
                <Paragraph>
                    {t('1.2. A promoção (“Sorteio”) é destinada às pessoas físicas maiores de 18 (dezoito) anos e que estejam vinculados a um Clube associado à Liga Suprema Brazil e será regido pelas cláusulas e disposições deste Regulamento. O Evento tem caráter recreativo e desportivo, de acordo com o artigo 3º inciso II da Lei 5768/71 e com o artigo 30 do Decreto 70.951/72. A participação é voluntária, e não implica em qualquer ônus, de qualquer natureza, para os Participantes inscritos e para os Participantes premiados no final, salvo às obrigações tributárias.')}
                </Paragraph>
                <Paragraph>
                    {t('1.3. A Organizadora se reserva ao direito de alterar o cronograma, sem prévia comunicação, caso julgue necessário ao bom desenvolvimento dos eventos.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('2. CRITÉRIO DE PARTICIPAÇÃO NA PROMOÇÃO:')}
                </Markes>
                <Paragraph>
                    {t('2.1. Os participantes serão pontuados (tickets) ao se inscreverem até o final do 1º nível do torneio 1M Supremo edição especial no dia 18/02 com seu início as 15:00 horário oficial de Brasília, após o torneio avançar para o nível 2 de blinds, as entradas não serão mais válidas para a promoção, o jogador que se inscrever até o final do primeiro nível, além de participar do sorteio, ganha um VIP GOLD 7 dias em seu ID.')}
                </Paragraph>
                <Paragraph>
                    {t('2.2. O torneio 1M Supremo já está disponível no App suprema com o nome “Supremo” e com seu horário de início as 15:00 do dia 18/02/2024.')}
                </Paragraph>
                <Paragraph>
                    {t('2.3. A pontuação (tickets) de cada participante estará vinculada ao seu ID de jogador e ao clube, sendo intransferível. Em hipótese alguma os pontos (tickets) referentes ao evento serão transferidos a terceiros, caso o jogador jogue por mais de um clube, suas pontuações (tickets) ficarão separadas pelo clube em qual participou de algum torneio, contabilizando os pontos de forma independente.')}
                </Paragraph>
                <Paragraph>
                    {t('2.4. O participante poderá jogar em qualquer dos clubes associados a Liga Suprema Brazil, que terá sua pontuação (tickets) vinculada em seu ID de jogador.')}
                </Paragraph>
                <Paragraph>
                    {t('2.5. O jogador que descumprir e/ou violar as regras da Suprema, presente no regulamento de jogo limpo, será banido e imediatamente excluído do evento, perdendo todas as suas pontuações. Não havendo a possibilidade de transferência de pontuação (tickets) para outro ID. Link sobre regras de jogo limpo disponível no link ao final deste regulamento. ')}
                </Paragraph>
                <Paragraph>
                    {t('2.6. A tabela de pontuação (tickets) será atualizada periodicamente uma vez ao dia, podendo sofrer um atraso de até um dia útil para atualização de seus tickets vinculados aos seus ID’s.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('3. DA PREMIAÇÃO')}
                </Markes>
                <Paragraph>
                    {t('3.1. A SUPREMA vai distribuir os seguintes prêmios:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('3.1.1. 2 (dois) ingressos com direito a um acompanhante cada: para a luta do Popó Vs Bambam que acontecerá no dia 24/02/2024, em São Paulo-SP, No recinto de eventos “Vibra São Paulo” no endereço: Av. das Nações Unidas, 17955 - Vila Almeida, São Paulo - SP, 04795-100.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('3.2. O sorteio será realizado no dia 19/02/2024 às 17:00 horário oficial de Brasília através das redes oficiais da Suprema Union.')}
                </Paragraph>
                <Paragraph>
                    {t('3.3. A premiação descrita no Item 3 será atrelada ao ID da conta do jogador.')}
                </Paragraph>
                <Paragraph>
                    {t('3.4. O ganhador de um ingresso, concorda que o prêmio é transferível e não conversível em dinheiro, podendo assim, repassar o seu prêmio para outra pessoa. O ganhador deverá repassar as informações previamente para a organizadora, correndo o risco de perder o prêmio caso não passe as informações precisas.')}
                </Paragraph>
                <Paragraph>
                    {t('3.5. O participante poderá jogar em qualquer dos clubes associados as ligas participantes.')}
                </Paragraph>
            </Content>
            <Content>
                <Paragraph>
                    <Span>4. </Span>{t('A lista oficial dos ganhadores dos sorteios será exposta no Instagram oficial da SUPREMA UNION até de 19 de fevereiro de 2024 até às 18h do horário Oficial de Brasília.')}
                </Paragraph>
                <Paragraph>
                    <Span>5. </Span>{t('Quaisquer dúvidas, divergências ou situações não previstas no regulamento serão julgadas e decididas de forma soberana e irrecorrível pela SUPREMA UNION. Todas as dúvidas referentes ao Regulamento deverão ser encaminhadas ao Clube e este entrará em contato com a Suprema.')}
                </Paragraph>
                <Paragraph>
                    <Span>6. </Span>{t('A premiação da SUPREMA FOLIA, independe de autorização da CEF, conforme Lei 13.756/2018, Art. 3º da Lei 5.768/71, combinado com o Art. 30 do Decreto 70.951/72.')}
                </Paragraph>
                <Paragraph>
                    <Span>7. </Span>{t('A SUPREMA UNION não poderá ser responsabilizada por informações enviadas erroneamente, incompletas, incorretas, inválidas ou imprecisas que tornem impossível o contato e/ou a entrega do prêmio. O participante reconhece e aceita expressamente que a Suprema não poderá ser responsabilizada por qualquer dano ou prejuízo oriundo da participação nesse Evento ou da eventual aceitação do prêmio.')}
                </Paragraph>
                <Paragraph>
                    <Span>8. </Span>{t('A SUPREMA UNION não se responsabiliza por nenhuma falha técnica de transmissão, problemas de acesso à Internet ou qualquer caso fortuito ou de força maior que possam impedir a participação do usuário.')}
                </Paragraph>
                <Paragraph>
                    <Span>9. </Span>{t('Todo participante do torneio se compromete a ceder sua imagem para utilização nos moldes deste regulamento.')}
                </Paragraph>
                <Paragraph>
                    <Span>10. </Span>{t('A participação neste concurso implica na aceitação e total concordância com as regras dispostas no presente regulamento.')}
                </Paragraph>
            </Content>
            <Content>
                <Paragraph>
                    {t('O Regulamento de Jogo Limpo é parte integrante do presente Regulamento')} <Ancora onClick={handleEmailSac}>security@supremapoker.com.br.</Ancora> {t('Os Clubes estão cientes de que se os seus jogadores adotarem uma conduta de antijogo, os Clubes estarão sujeitos às penalidades previstas neste Regulamento. ')}
                </Paragraph>
            </Content>
        </Container>
    )
}

export default withNamespaces()(PopoRegulation)