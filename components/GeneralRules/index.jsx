import React from "react";
import { withNamespaces } from 'react-i18next';
import { Ancora, Container, Content, Context, Markes, Paragraph, Span, Title } from "./styled";

function GeneralRulesComponent ({t}) {

    const emailAddress = 'security@supremapoker.com.br';

    const handleEmailSac = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <Container>
            <Title>{t('REGULAMENTO GERAL')}</Title>
            <Content>
                <Markes>
                    {t('1. REGULAMENTO GERAL')}
                </Markes>
                <Paragraph>
                    {t('1.1. A LIGA SUPREMA POKER vai sempre considerar os melhores interesses para a prática do jogo e a imparcialidade será sempre prioridade em todo processo de tomada de decisão.')}
                </Paragraph>
                <Paragraph>
                    {t('1.2 Todos os torneios começarão automaticamente no horário programado no calendário, conforme exibido no Lobby do Torneio. Nós nos reservamos o direito de atrasar ou cancelar um torneio, sem aviso prévio.')}
                </Paragraph>
                <Paragraph>
                    {t('1.3. Informações importantes sobre cada torneio, incluindo estrutura de blind, duração das rodadas, rebuy, add-on e informações sobre o intervalo poderão ser encontradas no Lobby do Torneio. Nós nos reservamos o direito de mudar os parâmetros de qualquer torneio a qualquer momento, sem aviso prévio.')}
                </Paragraph>
                <Paragraph>
                    {t('1.4. Os lugares são distribuídos randomicamente. Mudanças de lugar não serão permitidas.')}
                </Paragraph>
                <Paragraph>
                    {t('1.5. A premiação será distribuída como indicado no Lobby do Torneio, exceto quando um acordo for feito ou o torneio for cancelado. A estrutura de premiação não será finalizada até que o registro esteja encerrado e o período de rebuy e/ou add-on tenha terminado.')}
                </Paragraph>
                <Paragraph>
                    {t('1.6. Para se qualificar à realização de rebuy em um torneio com rebuy, o jogador precisará ter recursos suficientes disponíveis em sua conta. Os recursos que se encontrarem comprometidos com outros jogos não serão considerados disponíveis')}
                </Paragraph>
                <Paragraph>
                    {t('1.7. Será permitido o registro tardio em todos os torneios. O período de registo tardio poderá variar, mas sempre será indicado no Lobby do Torneio. Por exemplo, se um torneio começar às 09h00 e tiver 5 níveis de blinds de registro tardio, com blinds de 10 minutos, o registro se encerrará às 09h50.')}
                </Paragraph>
                <Paragraph>
                    {t('1.8. Informamos que quando um jogador utilizar mais de uma conta no mesmo evento, situação que não recomendamos e não incentivamos, o jogador o fará por sua conta em risco. Tal ação poderá acarretar a aplicação de penalidades, como advertência, desqualificação do torneio, confisco parcial ou total dos ganhos e exclusão da plataforma.')}
                </Paragraph>
                <Paragraph>
                    {t('1.8.1. Os jogadores que se registrarem com mais de uma conta no mesmo evento, deve adotar comportamentos que não violem as normas do jogo limpo.')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('l. Jogar com apenas uma conta por mão, evitando obter vantagem indevida, caso contrário a situação caracterizará collusion.')}
                    </Paragraph>
                    <Paragraph>
                        {t('ll. Não realizar chip dumping entre as contas (perda intencional de fichas para um outro jogador).')}
                    </Paragraph>
                    <Paragraph>
                        {t('lll. Não trocar informações com outros jogadores sobre suas cartas via telefone/programas de bate papo, situação que caracterizará collusion.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('1.8.2. A equipe de Operação do Suprema Poker monitora e revisa todos os eventos, permitindo que todos desfrutem de um jogo de Poker saudável, justo e cheio de emoção, coibindo comportamentos desonestos no jogo que viole as normas do Jogo Limpo, e quando identificados os jogadores serão punidos.')}
                </Paragraph>
                <Paragraph>
                    {t('1.9. A escolha do nickname e da foto do avatar não deve infringir a propriedade intelectual, privacidade ou qualquer outro direito de terceiros. Nicknames como "liga supremapoker", "supremapoker", "liga suprema" ou qualquer nome de um clube participante da liga não serão aceitos e a conta estará sujeita à exclusão da LIGA SUPREMA POKER.')}
                </Paragraph>
                <Paragraph>
                    {t('1.10. A LIGA SUPREMA POKER poderá solicitar dos jogadores a qualquer momento documentos pessoais de identificação que comprovem a sua maioridade. A LIGA SUPREMA POKER poderá suspender ou cancelar em caráter temporário ou permanente, a seu exclusivo critério, a conta do jogador que se recusar a enviar os documentos, e excluirá a conta do jogador que comprovadamente for menor de idade.')}
                </Paragraph>
                <Paragraph>
                    {t('1.11. Em todos os torneios será possível o cancelamento da inscrição até um minuto do horário marcado para o seu início. Tickets ganhos em satélites não permitem cancelamento de inscrição.')}
                </Paragraph>
                <Paragraph>
                    {t('1.12. A LIGA SUPREMA POKER poderá alterar os horários de inscrição ou cancelamento de inscrição sem aviso prévio.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('2. Eliminações e balanceamento das mesas.')}
                </Markes>
                <Paragraph>
                    {t('2.1. O torneio termina quando um jogador acumula todas as fichas no jogo ou quando todos os jogadores restantes recebem o mesmo prêmio – por exemplo, se o torneio concede 5 prêmios idênticos, ele poderá terminar quando restarem apenas 5 jogadores.')}
                </Paragraph>
                <Paragraph>
                    {t('2.2. Caso dois ou mais jogadores sejam eliminados na mesma mão, o jogador com mais fichas no início da mão termina em posição mais alta do que o jogador com menos fichas. Caso todos os jogadores tenham iniciado a mão com uma quantidade idêntica de fichas, todos terminarão empatados e eventuais prêmios serão distribuídos igualmente entre todos.')}
                </Paragraph>
                <Paragraph>
                    {t('2.2.1. Durante a disputa hand for hand, dois ou mais jogadores eliminados durante uma única mão sincronizada serão tratados como se tivessem sido eliminados simultaneamente, mesmo se estiverem ocupando mesas diferentes. A ordem de colocação final será baseada na comparação do tamanho dos stacks')}
                </Paragraph>
                <Paragraph>
                    {t('2.3. Quando restar apenas um jogador para ser eliminado para entrar na faixa de premiação, o torneio será jogado hand for hand. Isso significa que, caso uma mesa conclua sua mão antes da(s) outra(s) mesa(s), ela deverá aguardar que a(s) outra(s) terminem antes de disputar a mão seguinte.')}
                </Paragraph>
                <Paragraph>
                    {t('2.4. Quando restarem dois jogadores em uma mesa final, o botão colocará o small blind e age primeiro na rodada de abertura.')}
                </Paragraph>
                <Paragraph>
                    {t('2.5. Conforme os jogadores forem sendo eliminados do torneio, o software quebrará as mesas para preencher lugares vazios, de modo a garantir que todas tenham um número equilibrado de jogadores ativos.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('3. Queda de conexão e sittingout')}
                </Markes>
                <Paragraph>
                    {t('3.1. Ao participar de um torneio, o jogador aceita o risco da queda e/ou falta de conexão com a Internet devido a problemas e/ou instabilidades entre seu celular/computador e os servidores, lag, travamentos, entre outras hipóteses em relação as quais a LIGA SUPREMA POKER não tem qualquer interferência.')}
                </Paragraph>
                <Paragraph>
                    {t('3.2. O jogador isenta a LIGA SUPREMA POKER de qualquer responsabilidade decorrente de problemas de conexão com a internet.')}
                </Paragraph>
                <Paragraph>
                    {t('3.3. Caso um jogador esgote seu tempo durante uma mão, estando ou não conectado ao jogo, restará configurada a desistência da mão se houver ação por parte do jogador, ou a mão será passada se não houver ação por parte do jogador.')}
                </Paragraph>
                <Paragraph>
                    {t('3.4. Caso um jogador não esteja conectado antes do início de uma mão, ele receberá cartas normalmente. Para realização de um acordo, os jogadores devem ficar sitting out.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('4. CHAT')}
                </Markes>
                <Paragraph>
                    {t('4.1. Os jogadores não poderão discutir a mão ou suas cartas até que a ação esteja terminada, ainda que não estejam participando da mão. Os jogadores são obrigados a proteger os outros jogadores no torneio durante todo o tempo. Não é permitido discutir sobre cartas descartadas ou possibilidades de mãos. Qualquer violação nesse sentido ensejará a aplicação de penalidades.')}
                </Paragraph>
                <Paragraph>
                    {t('4.2. O jogador está proibido de publicar material ilegal, obsceno, acusatório, difamatório, ameaçador, indecente, racista ou qualquer material que constitua uma violação à lei ou que possa ser considerado ofensivo na sua generalidade através do Serviço utilizando a função chat.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('5. Ética no jogo')}
                </Markes>
                <Paragraph>
                    {t('5.1. O Poker é um jogo individual, e não de equipe. Qualquer ação ou comunicação realizada entre jogadores, ainda que com o intuito de ajuda, será considerada antiética e proibida.')}
                </Paragraph>
                <Paragraph>
                    {t('5.2. São consideradas violações às regras de jogo limpo o softplay (jogar de uma forma que facilite o jogo para um outro adversário), o chip dumping (perda intencional de fichas para um outro jogador), e o collusion (atuação conjunta de jogadores em determinada mão para obtenção de uma vantagem injusta), entre outras hipóteses. A constatação de tais práticas ensejará a aplicação de penalidades, incluindo o confisco de recursos da conta do jogador, encerramento da conta, aplicação de multa, e retenção sobre qualquer oferta de rakeback disponível.')}
                </Paragraph>
                <Paragraph>
                    {t('5.3. Nós rotineiramente revisamos os jogos para assegurar a integridade de nossos torneios e garantir a ética e a observância às regras do jogo limpo, combatendo toda e qualquer tentativa de violação a tais regras. Por conta disso, em alguns casos poderá ser necessário reter os ganhos do jogador até finalizado o processo investigatório.')}
                </Paragraph>
                <Paragraph>
                    {t('5.4. A utilização de inteligência artificial (BOT) é estritamente proibida nos torneios e jogos da LIGA SUPREMA POKER. Todas as ações de um jogador dentro da LIGA SUPREMA POKER devem ser executadas pessoalmente por tal jogador, através da interface do usuário acessível pela utilização do sistema e sem a assistência de qualquer tipo de automação.')}
                </Paragraph>
                <Paragraph>
                    {t('5.5. Qualquer jogador que suspeitar da ocorrência de qualquer prática contrária às regras de jogo limpo, poderá realizar uma denúncia por meio do site www.securitypkr.com.br.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('6. PENALIDADES')}
                </Markes>
                <Paragraph>
                    {t('6.1. A violação de qualquer critério das Regras do Jogo Limpo e Ética no Jogo ensejará a aplicação de penalidades a critério exclusivo da LIGA SUPREMA POKER, sem prejuízo da adoção de outras medidas legais que se mostrarem pertinentes.')}
                </Paragraph>
                <Paragraph>
                    {t('6.2. Durante o processo de investigação, a LIGA SUPREMA POKER poderá suspender temporariamente a conta do(s) jogador(es) investigado(s), bem como reter quaisquer recursos depositados em sua(s) conta(s) e/ou premiação(ões)')}
                </Paragraph>
                <Paragraph>
                    {t('6.3. As penalidades que poderão ser aplicadas aos jogadores que violarem as Regras do Jogo Limpo e Ética no Jogo são advertência, retenção e bloqueio de saldos (premiações de torneios e saldos em conta), suspensão temporária ou definitiva do usuário, retenção sobre qualquer oferta de rakeback disponível, aplicação de multa.')}
                </Paragraph>
                <Paragraph>
                    {t('6.4. As penalidades poderão ser aplicadas cumulativamente.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('7. SEGURANÇA E A SUA CONTA')}
                </Markes>
                <Paragraph>
                    {t('7.1. Cada Conta é acessível através da combinação de um nome de usuário único e uma senha única e secreta.')}
                </Paragraph>
                <Paragraph>
                    {t('7.2. O jogador é obrigado a escolher o seu próprio Nome de Usuário e Senha, sendo gerado um Identificador Único (ID).')}
                </Paragraph>
                <Paragraph>
                    {t('7.3. O jogador reconhece que é totalmente responsável por toda a utilização do serviço ofertado, sob os seus dados de acesso e que não revelará os mesmos a qualquer pessoa, em nenhuma circunstância, nem permitirá que outra pessoa utilize a sua Conta.')}
                </Paragraph>
                <Paragraph>
                    {t('7.4. O jogador é obrigado a manter permanentemente os seus Dados de Acesso secretos e confidenciais e a fazer todos os esforços para proteger a sua confidencialidade. Qualquer uso não-autorizado dos seus Dados de Acesso é da inteira responsabilidade do jogador e o mesmo será considerado como seu uso pessoal. Qualquer responsabilidade decorrente disso será atribuída ao jogador.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('CONTATO')}
                </Markes>
                <Paragraph>
                    {t('Qualquer dúvida que você tiver sobre essas regras, entre em contato com ')} <Ancora onClick={handleEmailSac}>security@supremapoker.com.br.</Ancora>
                </Paragraph>
            </Content>
        </Container>
    )
}

export default withNamespaces()(GeneralRulesComponent)