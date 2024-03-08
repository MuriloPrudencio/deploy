import React from "react";
import { withNamespaces } from 'react-i18next';
import { Ancora, Container, Content, Context, Markes, Paragraph, Span, Title } from "./styled";
import Link from "next/link";

function CommunityRulesComponent ({t}) {

    const emailAddress = 'sac@supremapoker.net';

    const handleEmailSac = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const emailAtend = 'atendimento@suprema.group';

    const handleEmailAtend = () => {
        window.location.href = `mailto:${emailAtend}`;
    };


    return (
        <Container>
            <Title>{t('REGRAS DA COMUNIDADE')}</Title>
            <Content>
                <Paragraph>
                    <Span>
                        {t('Estas Regras da Comunidade ("Regras") regulam questões gerais do usuário relacionadas aos Serviços que fornecemos. Para evitar dúvidas, os termos em maiúsculas utilizados nestas Regras são definidos nos Termos de Serviço, e Condições Gerais de Uso  ("Termos, e Condições").')}
                    </Span>
                </Paragraph>
                <Paragraph>
                    <Span>
                        {t('Por favor, leia estas Regras cuidadosamente, pois elas constituem um acordo legal vinculante entre você, um jogador de poker online ("Jogador"), e nós, Suprema Poker.')}
                    </Span>
                </Paragraph>
                <Paragraph>
                    {t('Você concorda que estas Regras regem o seu uso dos nossos Serviços e estão incorporadas aos Termos, e Condições. Se houver algum conflito entre estas Regras e os Termos, e Condições, os Termos,e Condições prevalecerão. Se você violar estas Regras, poderemos tomar medidas contra você ou sua conta de acordo com estas Regras ou com os Termos,e Condições, incluindo, sem limitação, o encerramento imediato de sua conta conosco. As questões não especificamente mencionadas nestas Regras serão tratadas de acordo com os Termos,e Condições e a respectiva justificativa.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('1. Configurações')}
                </Markes>
                <Paragraph>
                    {t(`1.1. "Conta" significa uma conta que você cria ao acessar o Aplicativo.`)}
                </Paragraph>
                <Paragraph>
                    {t('1.2. "Regras da Comunidade" significa as regras de conduta que regem sua interação com nossos Serviços e outros Jogadores.')}
                </Paragraph>
                <Paragraph>
                    {t('1.3. "Conteúdo" significa qualquer informação, texto, gráficos, fotografias ou outros materiais carregados e/ou baixados por meio do nosso Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('1.4. "Termos do Recursos" significa quaisquer outras regras relacionadas a serviços específicos, como plataformas e APIs, aplicativos para dispositivos móveis, fóruns, concursos, assinaturas ou programas de fidelidade que possamos publicar.')}
                </Paragraph>
                <Paragraph>
                    {t('1.5. "Jogo" significa jogar pôquer online através da aplicação Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('1.6. "Ofertas" significa programas especiais, incluindo ofertas especiais, tours e presentes, tanto digitais como táteis, que o Suprema Poker poderá oferecer de tempo em tempo a certos Jogadores elegíveis.')}
                </Paragraph>
                <Paragraph>
                    {t('1.7. "Jogador" significa qualquer pessoa física com plena capacidade civil, maior de idade, que concorde com todas as disposições destes T&Cs e dos Documentos.')}
                </Paragraph>
                <Paragraph>
                    {t('1.8. "Serviços" significa nosso Jogo, Serviços, Conteúdo, SMS, API, notificações por e-mail, aplicativos, botões, widgets, anúncios, serviços comerciais, domínios ou sites, incluindo, mas não se limitando a supremapoker e outros serviços cobertos que estejam vinculados a estes T&Cs e Documentos.')}
                </Paragraph>
                <Paragraph>
                    {t('1.9. "Suprema Poker" significa o nome do aplicativo de pôquer online de propriedade da Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('1.10. "Conteúdo do usuario" significa todos os dados que você carrega, transmite, cria ou gera no aplicativo ou por meio dele. Isso inclui coisas como sua foto de perfil, seu texto no jogo ou chat de vídeo e sua arte no jogo ou outro conteúdo criado ou projetado por você.')}
                </Paragraph>
                <Paragraph>
                    {t('1.11. "Item Virtual" significa uma moeda virtual a ser usada nos Serviços ou um item virtual no jogo.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('2. Conduta geral')}
                </Markes>
                <Paragraph>
                    {t('2.1. Usar os Serviços, intencionalmente ou não, em violação ou descumprimento de qualquer lei ou regulamento aplicável, ou de uma maneira que possa colocar o Suprema Poker em violação ou descumprimento de qualquer lei ou regulamento aplicável, ou de uma maneira que promova a violação ou descumprimento de qualquer lei ou regulamento aplicável.')}
                </Paragraph>
                <Paragraph>
                    {t('2.2. Envolver-se em qualquer ato que a Suprema Poker considere, a seu exclusivo critério, estar em conflito com o espírito ou a intenção dos Serviços, incluindo, sem limitação, contornar ou manipular os Termos, estas Regras, outros Termos e Condições, regras de jogo, mecânica de jogo ou outras políticas da Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('2.3. Projetar, usar, distribuir ou vender cheats, exploits, software de automação, bots, hacks, mods ou quaisquer produtos de terceiros não autorizados ou outros softwares projetados para modificar, beneficiar ou interferir nos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('2.4. Instituir, executar, apoiar, incentivar ou se envolver em qualquer forma tipo de ataque aos Serviços, incluindo, sem limitação, a distribuição de malware, fazer um ataque de negação de serviço ou qualquer outra tentativa de interromper os Serviços ou de qualquer outra pessoa uso ou fruição dos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('2.5. Tente obter acesso não autorizado aos Serviços, Contas registradas para terceiros, ou a qualquer computador ou servidor usado para oferecer ou oferecer suporte aos Serviços ou rede conectada aos Serviços por qualquer meio diferente da interface de usuário fornecida pela Suprema Poker, incluindo e sem limitar a contornar, modificar ou fazer com que seja modificado, tentar contornar ou modificar, ou encorajar ou ajudar qualquer outra pessoa a contornar ou modificar, qualquer segurança, tecnologia, dispositivo, arquivo ou software que faça parte dos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('2.6. Usar, facilitar, criar ou manter qualquer conexão não autorizada aos serviços, incluindo, sem limitação (1) qualquer conexão a qualquer servidor não autorizado que emule ou tente emular qualquer parte dos Serviços; ou (2) qualquer conexão usando programas, tolos ou software não expressamente aprovado pela Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('2.7. Use qualquer software não autorizado de terceiros ou outro que acesse, intercepte ou de outra forma colete informações de ou por meio dos Serviços ou que estejam em trânsito de ou para os Serviços, incluindo, sem limitação, qualquer software que leia áreas de RAM ou fluxos de tráfego de rede usados pelos Serviços para armazenar informações sobre personagens, elementos ou ambientes do joga Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('2.8. Interceptar, examinar ou de outra forma observar qualquer protocolo de comunicação proprietário usado por um cliente, um servidor ou os Serviços, seja por meio do uso de um analisador de rede, sniffer de pacotes ou quaisquer outras ferramentas.')}
                </Paragraph>
                <Paragraph>
                    {t('2.9. Fazer qualquer uso automatizado dos Serviços ou tomar qualquer ação que imponha ou possa impor (a nosso exclusivo critério) uma carga não razoável ou desproporcionalmente grande em nossa infraestrutura.')}
                </Paragraph>
                <Paragraph>
                    {t('2.10. Ignore quaisquer cabeçalhos de exclusão de robôs ou outras medidas que empregamos para restringir o acesso aos Serviços ou usar qualquer software.')}
                </Paragraph>
                <Paragraph>
                    {t('2.11. Interferir ou tentar interferir no funcionamento adequado dos Serviços, ou conectar-se ou usar os Serviços de qualquer forma não expressamente permitida pelos Termos e Condições, Regulamento Geral ou estas Regras, incluindo, sem limitação, interromper, sobrecarregar ou auxiliar no interrupção ou impedimento dos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('2.12. Fazer uso indevido dos serviços de suporte ao cliente da Suprema Poker, incluindo o envio de relatórios falsos de abuso ou uso de linguagem profana ou abusiva nas comunicações com nosso pessoal de suporte.')}
                </Paragraph>
                <Paragraph>
                    {t('2.13. Modificar, reverter, fazer engenharia, descompilar desmontar, decifrar ou de outra forma tentar derivar o código-fonte de nós, ou obter qualquer informação dos Serviços usando qualquer método não expressamente permitido pela Suprema Poker.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('3. CÓDIGO DE CONDUTA')}
                </Markes>
                <Paragraph>
                    {t('Este Código de Conduta estabelece os códigos que regulam as condutas e comportamentos dos Usuários. Como usuário, você concorda em obedecer aos seguintes códigos ao usar nossos Serviços.')}
                </Paragraph>
                <Context>
                    <Markes>
                        {t('3.1. Criação e uso da conta')}
                    </Markes>
                    <Paragraph>
                        {t('3.1.0. Você não deve transferir ou fazer com que seja transferido sua conta ou quaisquer itens virtuais associados à sua conta para ninguém sem a permissão por escrito da Suprema Poker. Qualquer transferência ou tentativa de transferência é proibida e nula.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.1.1. Você não tem permissão para compartilhar a Conta com outras pessoas além de você e não deve acessar ou usar uma Conta ou Itens Virtuais que tenham sido transferidos do criador original da Conta sem a permissão por escrito da Suprema Poker.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.1.2. Você não deve obter ilegalmente informações de login ou acessar contas que não foram registradas por você.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.1.3. Você é o único responsável pela sua Conta e garante que os dados enviados estejam em conformidade com as leis aplicáveis e não infrinja os direitos de terceiros.')}
                    </Paragraph>
                    <Markes>
                        {t('3.2. Conteúdo ofensivo/legal')}
                    </Markes>
                    <Paragraph>
                        {t('Ao usar nossos Serviços, você não deve publicar, circular e/ou postar qualquer conteúdo que:')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.2.0. São inapropriados ou ofensivos, como conteúdos que contenham palavrões, obscenidades, violência, pornografia, referências a drogas, retaliação ou provocação ou outros.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.2.1. Serem desrespeitosos ou discriminatórios em relação aos outros com base na raça, sexo, nacionalidade etc.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.2.2. Sejam maliciosos, incluindo, mas não se limitando a vírus malware ou spyware ou qualquer outro programa que possa danificar a operação dos Serviços.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.2.3. Advogar ou promover drogas ou atividades ilegais.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.2.4. Assediar, abusar ou prejudicar, ou defender ou incitar o assédio, o abuso ou a presunção de outra pessoa ou grupo, incluindo, mas sem se limitar a, conteúdos que contenham calúnias raciais, étnicas ou religiosas ou referências a figuras criminosas, políticas ou religiosas.')}
                    </Paragraph>
                    <Markes>
                        {t('3.3. Usuário infrator ou impróprio de informações pessoais de terceiros')}
                    </Markes>
                    <Paragraph>
                        {t('Ao usar nossos Serviços, você não deve:')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.3.0. Coletar, usar indevidamente ou disseminar o conteúdo de qualquer outro usuário ou informações pessoais, incluindo endereços de e-mail.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.3.1. Publicar, circular e/ou postar conteúdo ou um link para conteúdo que infrinja ou viole a propriedade intelectual ou direitos de propriedade pertencentes a terceiros, ou que divulgue ou auxilie na divulgação de informações confidenciais de terceiros.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.3.2. Fazer upload ou transmitir, ou tentar fazer upload ou transmitir, sem a permissão expressa por escrito da Suprema Poker, qualquer material que atue como um mecanismo de transmissão ou coleta de informações passivo ou ativo, incluindo, sem limitação, formatos de intercâmbio de gráficos claros ("gifs"), 1x1 pixels, web bugs, cookies ou outros dispositivos ou tecnologias semelhantes (às vezes chamados de "spyware". "mecanismos de coleta passiva" ou "pcms" ou "malware").')}
                    </Paragraph>
                    <Markes>
                        {t('3.4. Promoção e Publicidade')}
                    </Markes>
                    <Paragraph>
                        {t('3.4.0. Você concorda e reconhece que todo o conteúdo dos produtos de Suprema Poker, incluindo, mas não se limitando a logotipos, marcas registradas, vídeos, software e produtos online, é material protegido por direitos autorais. Sem a permissão expressa da Suprema Poker, você nunca deve copiar, modificar, reproduzir, traduzir ou adaptar produtos ou criar produtos ou trabalhos derivados usando os produtos em qualquer forma escrita, visual ou de áudio, ou por qualquer meio eletrônico ou mecânico. Qualquer atividade desse tipo constitui uma violação dos direitos autorais, marcas registradas e direitos de propriedade da Suprema Poker e pode resultar em ação legal.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.1. Você concorda que não irá, sob nenhuma circunstância, promover a Suprema Poker como um aplicativo de jogo com dinheiro real')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.2. Para fins de promoção e publicidade da sua Fanpage, você só tem permissão para usar o logotipo oficial da Suprema Poker e/ou elementos da marca, desde que tenha obtido a permissão da Suprema Poker e os materiais de publicidade e/ou promocionais devem preencher os seguintes requisitos.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.2.1. 0 material publicitário e/ou promocional enfoca o material da sua própria marca, como Logotipo do Clube/Logotipo da Fan Page/ Logotipo da Liga etc.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.2.2. Você deve esclarecer que Suprema Poker não se envolve em nenhuma circunstância com o funcionamento do Clube / Liga.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.2.3. A seguinte isenção de responsabilidade deve ser declarada nele:')}
                    </Paragraph>
                    <Markes>
                        {t('"Suprema Poker é um aplicativo de jogo móvel e não fornece ou envolve em nenhum serviço de apostas com dinheiro real. Suprema Poker não é patrocinador ou de nenhuma forma envolvido com esta atividade promocional, nem a Suprema Poker a endossa".')}
                    </Markes>
                    <Paragraph>
                        {t('Nós nos reservamos o direito de revisar todos os materiais e anúncios de promoção e solicitar modificações e/ou remoção dos mesmos. Se tomarmos conhecimento de que qualquer site ou página de mídia social viola estas Regras, os Termos de Serviço, a Política de Privacidade, os Termos em Destaque ou qualquer outra política da Suprema Poker, também nos reservamos o direito de tomar medidas até o limite máximo possível, incluindo, mas não se limitando a suspender e/ou remover sua conta de usuário ou Clube ou Liga.')}
                    </Paragraph>
                    <Markes>
                        {t('3.5. Uso justo do logotipo e/ou elementos da marca da Suprema Poker')}
                    </Markes>
                    <Paragraph>
                        {t('3.5.0. Exemplos de uso que podem se enquadrar no uso justo: Discussão sobre os novos recursos e atividades do clube da Suprema Poker e compartilhamento de capturas de tela do seu jogo com seus amigos.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.5.1. Exemplos de uso que podem não se enquadrar no uso justo: Usar os elementos da marca Suprema Poker para enganar os visitantes quanto à sua afiliação com a Suprema Poker e/ou para promover o seu Clube / Liga sem a permissão de uso e/ou encorajar a violação dos Termos, e Condições, Política de Privacidade, Regulamento Geral, estas Regras da Suprema Poker e outras políticas da Suprema Poker.')}
                    </Paragraph>
                    <Paragraph>
                        {t('Se você tiver alguma dúvida, entre em contato conosco através do e-mail:')} <Ancora onClick={handleEmailSac}>sac@supremapoker.net</Ancora>  e <Ancora onClick={handleEmailAtend}>atendimento@suprema.group</Ancora> 
                    </Paragraph>
                    <Markes>
                        {t('3.6. Nome de domínio e uso de marca')}
                    </Markes>
                    <Paragraph>
                        {t('3.6.0. Indique claramente que Suprema Poker não é afiliado com sua empresa:')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.6.0.1. Você deve tomar medidas razoáveis para garantir que os usos não sejam confundidos com o status e o (s) nome (s) de domínio do seu site.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.6.0.2. Você deve indicar claramente o status do seu site, seja ele um fansite do Clube, um Fansite da Liga ou outro (por exemplo, "fansite", "fansite não oficial", "fanpage não oficial", "fan page não oficial da liga" ou qualquer outra designação que tenha obtido nossa aprovação por escrito).')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.6.0.3. Você não deve usar domínios que imitem de perto o domínio oficial da Suprema Poker.')}
                    </Paragraph>
                    <Markes>
                        {t('3.7. Collusion e trapaça')}
                    </Markes>
                    <Paragraph>
                        {t('3.7.0. Você concorda e reconhece que as seguintes condutas são estritamente proibidas por nós:')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.7.1. Collusion – uma situação em que você e outros jogadores trabalham juntos, compartilhando conhecimento ou outros meios, para obter uma vantagem injusta.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.7.2. Despejo de fichas (Chip dumping) – uma situação em que você perde uma mão intencionalmente para outro jogador a fim de transferir fichas e vice-versa.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.7.3. Ghosting – é quando um jogador assume a conta de outro jogador em uma reta final de torneio.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.7.4. Para evitar trapaças – não permitimos que jogadores da mesma casa (ou qualquer pessoa com o mesmo endereço IP) joguem no mesmo ring game ou torneio onde 10 ou menos jogadores estão registrados.')}
                    </Paragraph>
                </Context>
            </Content>
            <Content>
                <Markes>
                    {t('4. PENALIDADES')}
                </Markes>
                <Paragraph>
                    {t('Ao violar qualquer critério estabelecido por essa regra, você está sujeito as punições impostas pela Suprema Poker, baseados nos Termos e Condições, Regulamento Geral e estas Regras')}
                </Paragraph>
                <Paragraph>
                    {t('A aplicação das penalidades poderá ser cumulativa, e serão avaliadas de acordo com a gravidade da infração, a reincidência, a vantagem obtida, grau de lesão e quantas pessoas foram lesionadas, e serão aplicadas as seguintes penalidades:')}
                </Paragraph>
                <Content>
                    <Paragraph>
                        {t('4.1. Advertência: uma simples advertência  podendo ser verbal ou por meio de notificações no jogo, alertando o jogador sobre comportamentos inadequados.')}
                    </Paragraph>
                    <Paragraph>
                        {t('4.2. Restrições Temporárias: impor restrições temporárias, significa que a conta terá uma punição temporária de algum serviço, como a proibição de participar de determinadas atividades no jogo por um período específico. Isso pode incluir a restrição de chat, ou participação em eventos.')}
                    </Paragraph>
                    <Paragraph>
                        {t('4.3 Suspensão Temporária da Conta: os jogadores poderão enfrentar suspensão temporária de suas contas. Durante esse período, o acesso ao jogo é negado, e a duração será avaliada pela Suprema Poker')}
                    </Paragraph>
                    <Paragraph>
                        {t('4.4. Perda de Pontos ou Recompensas:  perda de pontos, classificações ou recompensas já adquiridas no jogo, incluindo premiações de torneio.')}
                    </Paragraph>
                    <Paragraph>
                        {t('4.5. Multa Virtual ou Perda de Moeda do Jogo: em casos de obtenção financeira, os jogadores poderão receber multas e perder as fichas adquiridas no jogo como penalidade.')}
                    </Paragraph>
                    <Paragraph>
                        {t('4.6. Restrições Permanentes: os jogadores poderão enfrentar restrições permanentes e a proibição permanente de suas contas.')}
                    </Paragraph>
                    <Paragraph>
                        {t('4.7. Banimento do IP:  o banimento do endereço IP impede que um jogador acesse o Aplicativo usando o mesmo IP.')}
                    </Paragraph>
                    <Paragraph>
                        {t('4.8. Ações Legais: em casos extremos de trapaças, hacking ou comportamento criminoso dentro do Aplcativo, a Suprema poderá buscar ações legais.')}
                    </Paragraph>
                </Content>
                <Paragraph>
                    {t('As penalidades são impostas a critério exclusivo da Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('Durante o processo de investigação, a Suprema Poker poderá suspender temporariamente a conta do(s) jogador(es) investigado(s), bem como reter quaisquer recursos depositados em sua(s) conta(s) e/ou premiação(ões).')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('5. SECURITY PKR')}
                </Markes>
                <Paragraph>
                    {t('5.1. Todos os jogos serão monitorados e, as condutas que violarem as Políticas e Regras publicadas pela Suprema, serão apuradas pela equipe de segurança de jogos.')}
                </Paragraph>
                <Paragraph>
                    {t('5.2. Caso o usuário tenha conhecimento de alguma violação, poderá realizar a sua denúncia através do link: ')} <Link href='https://securitypkr.com.br/ '><Ancora>securitypkr.com.br </Ancora></Link>
                </Paragraph>
            </Content>

        </Container>
    )
}

export default withNamespaces()(CommunityRulesComponent);