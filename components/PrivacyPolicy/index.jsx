import React from "react";
import { withNamespaces } from 'react-i18next';
import { Container, MainTitle, SubTitle ,Content, Paragraph, Span, Markes, ContainerTable, Context, Italic, Ancora, Article } from "./styled";
import { Trans } from 'react-i18next';
import Table from "./Table";
import TableLeft from "./TableHeaderLeft";
import Link from "next/link";


const tableDados = [
    ['Dados de contato', 'Nome completo e e-mail. Se for jogador ativo, é solicitado o número de ID no Aplicativo.'],
    ['Dados cadastrais simples', 'E-mail e nickname'],
    ['Dados de Identificação Digital', 'Endereço IP e porta lógica de origem, dispositivo (versão do sistema operacional), geolocalização, registros de data e horário de cada ação que você realizar, quais telas você acessou, ID da sessão e cookies.'],
    ['Security PKR', 'Nome Completo, e-mail, ID e Nickname'],
    ['', 'PARA VERIFICAÇÃO DE CONTA'],
    ['Confirmação de identidade ', 'Gênero, telefone, data de nascimento, nacionalidade, filiação, endereço, número de identidade e CPF.  É solicitado o envio de foto de documento pessoal com foto, dentro da validade e em boas condições; selfie; cópia do comprovante de endereço.'],
];

const headersDados = ['CLASSIFICAÇÃO', 'DADOS COLETADOS'];

const tableDireitos = [
    ['Acesso','Você tem o direito de ser informado e ter acesso sobre qual (is) dado (s) pessoal (is) estão sendo tratados.'],
    ['Correção','Você tem o direito de solicitar a correção de dados que estejam incompletos, inexatos ou desatualizados*.'],
    ['Anonimização','Você tem o direito de requerer que os dados pessoais excessivos ao tratamento sejam submetidos à anonimização.'],
    ['Bloqueio','Você tem o direito de requerer a suspensão do tratamento de dados excessivos.'],
    ['Eliminação','Você tem o direito de requerer a exclusão de seus dados pessoais de nossas bases, ressalvada as hipóteses legais autorizadoras e impositivas de tratamento.'],
    ['Portabilidade','Você tem o direito de requerer que os dados pessoais sob nosso tratamento sejam transferidos a outro prestador de serviço indicado por Você.'],
    ['Revogação de consentimento','Você tem o direito de, a qualquer momento, informar expressamente a revogação do seu consentimento para tratamento dos seus dados**.'],
]



function PrivacyPolicy ({t}) {
    return (
        <Container>
                <MainTitle>{t('POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS')}</MainTitle>
            <Content>
                <Paragraph>
                    <Trans i18nKey="essaPolítica">
                        Essa Política de Privacidade e Proteção de Dados Pessoais (“Política”) é para reafirmar o compromisso da <Span>Suprema</Span> (“Nós”, “nosso”) 
                        com a proteção dos dados pessoais dos clientes, visitantes e interessados (“Usuário”, “Você”).
                    </Trans>
                </Paragraph>
                <Paragraph>
                   {t('Por essa razão, essa Política de Privacidade e Proteção de Dados é regularmente revisada para assegurar a conformidade com leis, regulamentações e novas tecnologias, refletindo possíveis mudanças nas nossas operações e práticas de negócio. Então, é muito importante que Você acesse regularmente a nossa política e que observe a data de atualização.')}
                </Paragraph>
                <Paragraph>
                    {t('Essa Política de Privacidade se aplica aos nossos sites, aplicativo, bens e serviços vinculados a essa política ou que não têm uma política de privacidade separada')}
                </Paragraph>
            </Content>
                <SubTitle>{t('O USUÁRIO ESTÁ CIENTE DE QUE FORNECE INFORMAÇÃO PESSOAL DE FORMA CONSCIENTE E VOLUNTÁRIA POR MEIO DOS SITES E APLICATIVOS OPERADOS PELA SUPREMA.')}</SubTitle>
            <Content>
                <Markes>
                    {t('I. DEFINIÇÕES')}
                </Markes>
                <Paragraph>
                    {t('“Conta” significa uma conta que você cria ao acessar o Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('“Regras da Comunidade” significa as regras de conduta que regem sua interação com nossos Serviços e outros Jogadores.')}
                </Paragraph>
                <Paragraph>
                    {t('“Clube Online” é sociedade que tem como atividade a captação e interação de jogadores interessados em participar de jogos e eventos de pôquer online.')}
                </Paragraph>
                <Paragraph>
                    {t('“Conteúdo” significa qualquer informação, texto, gráficos, fotos ou outros materiais carregados e/ou baixados por meio de nosso Aplicativo e nosso Site.')}
                </Paragraph>
                <Paragraph>
                    {t('“Conteúdo do Usuário” significa todos os dados que você carrega, transmite, cria ou gera no ou por meio do Aplicativo. Isso inclui coisas como sua foto de perfil, seu texto no jogo ou bate-papo por vídeo e sua arte no jogo ou outro conteúdo de sua autoria ou design.')}
                </Paragraph>
                <Paragraph>
                    {t('Item Virtual” significa uma moeda virtual a ser usada nos Serviços ou um item virtual no jogo.')}
                </Paragraph>
                <Paragraph>
                    {t('“Jogo” significa jogar poker online através do aplicativo Suprema Poker por meio do Clube.')}
                </Paragraph>
                <Paragraph>
                    {t('“Jogador” significa qualquer pessoa física em plena capacidade civil, maior de idade, que concorde com todas as disposições desta Política e os Termos e Condições, sempre associado a um Clube.')}
                </Paragraph>
                <Paragraph>
                    {t('“Liga” é a sociedade que atua no ramo de promoção de aplicativos de jogos eletrônicos, organização e promoção de eventos esportivos relacionados com o jogo de pôquer e intermediação de negócios , sendo responsável por uma liga online de torneios e partidas de pôquer realizadas no âmbito do aplicativo Suprema Poker (“Aplicativo”), denominada “Liga Suprema” (“Liga Suprema”).')}
                </Paragraph>
                <Paragraph>
                    {t('"Ofertas” significa programas especiais, incluindo ofertas, excursões e presentes especiais, tanto digitais quanto táteis, que o Suprema Poker pode oferecer de tempos em tempos a certos jogadores qualificados')}
                </Paragraph>
                <Paragraph>
                    {t('“Serviços” significa nosso Jogo, Serviços, Conteúdo, SMS, APIs, notificações por e-mail, aplicativos, botões, widgets, anúncios, serviços de comércio, domínios ou sites, incluindo, entre outros serviços ofertados pela Suprema..')}
                </Paragraph>
                <Paragraph>
                    {t('“Suprema Poker” significa o nome do aplicativo de poker online de propriedade da Suprema.')}
                </Paragraph>
                <Paragraph>
                    {t('“Termos de Recursos” significa quaisquer outras regras relacionadas a serviços específicos, como plataformas e APIs, aplicativos para dispositivos móveis, fóruns, concursos, assinaturas ou programas de fidelidade que possamos publicar.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('II. SOBRE DADOS QUE COLETAMOS DE VOCÊ')}
                </Markes>
                <Paragraph>
                    {t('Tipos de Dados')}
                </Paragraph>
                <ContainerTable>
                    <Table data={tableDados} headers={headersDados}/>
                </ContainerTable>
                <Paragraph>
                    {t('Por que coletamos? E em qual momento coletamos?')}
                </Paragraph>
                <Paragraph>
                    {t('As suas informações, incluindo Dados Pessoais, poderão ser coletados quando Você os submete ou quando Você interage com o Site e o Aplicativo, conforme abaixo.')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('i. Visitas no Site: são coletados os seus Dados de Identificação Digital;')}
                    </Paragraph>
                    <Paragraph>
                        {t('ii. Contato com a Suprema pelos canais de comunicação: quando o Usuário entrar em contato com a Suprema por qualquer canal de comunicação, serão solicitados os Dados de contato para viabilizar a comunicação;')}
                    </Paragraph>
                    <Paragraph>
                        {t('iii. Acesso ao Aplicativo: são coletados seus Dados Cadastrais Simples e Dados de Identificação Digital para cadastrar o Usuário, sendo que tal procedimento possibilitará o acesso limitado aos serviços da Suprema;')}
                    </Paragraph>
                    <Paragraph>
                       {t('iv. Verificação de conta: sempre que for necessário verificar a identidade do usuário, serão solicitados documentos de Confirmação de identidade.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('Para você ingressar no Aplicativo e jogar nas mesas virtuais, é necessário que esteja cadastrado e afiliado a um dos Clubes de Pôquer que contratam os serviços da Liga Suprema. Por isso, é importante entender que os Dados Cadastrais Simples são solicitados apenas para criar o seu perfil no Aplicativo, enquanto todos os seus dados pessoais de cadastro, inclusive bancários, são coletados pelo Clube de Pôquer ao qual você se afiliar.')}
                </Paragraph>
                <Paragraph>
                    {t('A Suprema coleta seus Dados de Identificação Digital no momento em que você acessa o site e/ou Aplicativo, no intuito de manter a segurança dos jogos (Regra de Jogo Limpo e Regras de Comunidade), bem como garantir a lisura dos resultados e impedir que os jogadores sejam lesados. ')}
                </Paragraph>
                <Paragraph>
                    {t('Caso você queira participar da Liga Suprema com uma conta verificada, ou seja, em que a sua identidade foi atestada por Nós, você deverá acessar o link ')} <Link href='https://securitypkr.com.br/'><Ancora>security pkr</Ancora></Link> {t('e escolher a opção “Solicitar Verificação”. É nesse momento que a Suprema terá acesso aos seus dados de Confirmação de identidade, e somente será acessado porque você consentiu e solicitou essa etapa.')}
                </Paragraph>
                <Paragraph>
                    {t('Ainda, você poderá entrar em contato com a equipe de segurança de jogos da Suprema (“Security PKR”) e realizar uma denúncia caso queira reportar uma violação das Políticas da Liga Suprema. Nesse momento, você deverá realizar o login e/ou cadastro, fornecendo dados como Nome Completo, e-mail, ID e Nickname. Através desse formulário, a Suprema terá acesso aos dados fornecidos por você e tratará as informações internamente para viabilizar a apuração dos fatos denunciados por você. ')}
                </Paragraph>
                <Paragraph>
                    {t('Também coletamos informações sobre as transações que você faz, incluindo toda a sua atividade de jogo dentro do Aplicativo. Podemos coletar dados pessoais por meio de pesquisas que nós, ou empresas contratadas por nós façam para esse fim, realizamos. Além disso, coletamos informações sobre o uso dos nossos sites, aplicativos mobile e serviços. Também coletaremos outras informações necessárias para que possamos processar seus dados pessoais para os fins definidos nessa Política de Privacidade.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('III. BASE LEGAL PARA A COLETA E TRATAMENTO DOS DADOS PESSOAIS')}
                </Markes>
                <Paragraph>
                    {t('OS')}<Span>{t(' Dados de Contato')}</Span> {t('são coletados com base no consentimento do Usuário, o qual manifesta interesse em ter acesso aos serviços disponibilizados pela')} <Span>{t('Suprema')}</Span>
                    {t(' ,além do interesse em participar de sorteios, distribuição de prêmios e programas ofertados pela')} <Span>{t(' Suprema.')}</Span>
                </Paragraph>
                <Paragraph>
                    {t('Já os')} <Span>{t('Dados Cadastrais Simples,')}</Span> {t('também coletados com base no consentimento do Usuário, assim como no dever de reter informação da ')}<Span>{t('Suprema,')}</Span> {t(' são coletados quando o Usuário decide se cadastrar no Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('Ademais, a')} <Span>{t(' Suprema ')}</Span> {t('coleta os dados para:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('a) Estabelecer, administrar e gerenciar a conta do usuário;')}
                    </Paragraph>
                    <Paragraph>
                        {t('b) Permitir que você jogue na Plataforma;')}
                    </Paragraph>
                    <Paragraph>
                        {t('c) Receber e responder as suas comunicações e solicitações;')}
                    </Paragraph>
                    <Paragraph>
                        {t('d) Prevenir que estranhos atuem em nome do Usuário de forma indevida, como parte da política de antifraude e riscos associados;')}
                    </Paragraph>
                    <Paragraph>
                        {t('e) Enviar notificação sobre atualizações importantes em nossos sites, aplicativo mobile e serviços;')}
                    </Paragraph>
                    <Paragraph>
                        {t('f) Cumprir obrigações de acordo com as leis aplicáveis (incluindo legislação de jogo e requisitos regulatórios e de licenciamento relacionados às licenças de jogo);')}
                    </Paragraph>
                    <Paragraph>
                        {t('g) Identificar e divulgar qualquer suspeita de atividade ilegal, fraudulenta ou imprópria conectada com nossos sites, aplicativo mobile e serviços (incluindo lavagem de dinheiro), com base, inclusive, no interesse público de prevenir, detectar e proteger de atos ilícitos;')}
                    </Paragraph>
                    <Paragraph>
                        {t('h) Monitorar padrões de jogo e identificar possíveis preocupações de jogo responsável;')}
                    </Paragraph>
                    <Paragraph>
                        {t('i) Identificar qualquer uso fraudulento de nossos serviços;')}
                    </Paragraph>
                    <Paragraph>
                        {t('j) Identificar qualquer violação de nossos termos de uso;')}
                    </Paragraph>
                    <Paragraph>
                        {t('k) Realizar campanhas de pesquisa de mercado e apurar as pesquisas respondidas pelo usuário;')}
                    </Paragraph>
                    <Paragraph>
                        {t('l) Compartilhar suas informações pessoais com outros parceiros e empresas que auxiliam na prestação de serviços, assim como conselheiros profissionais, como advogados e consultores;')}
                    </Paragraph>
                    <Paragraph>
                        {t('m) Compartilhar seus dados pessoais com serviços de mídia social para fornecer a você anúncios em sites de mídia social, a menos que você tenha solicitado o não recebimento desses anúncios ou revogado o consentimento;')}
                    </Paragraph>
                    <Paragraph>
                        {t('n) Compartilhar suas informações pessoais com terceiros para verificação de identidade e geolocalização, incluindo para propósitos de detecção de fraude e lavagem de dinheiro;')}
                    </Paragraph>
                    <Paragraph>
                        {t('o) Compartilhar seus dados pessoais com bancos de dados de autoexclusão nacionais, se você tiver autoexcluído;')}
                    </Paragraph>
                    <Paragraph>
                        {t('p) Compartilhar seus dados pessoais com reguladores de jogos, a fim de auxiliar e cumprir qualquer investigação;')}
                    </Paragraph>
                    <Paragraph>
                        {t('q) Encaminhar e-mails de marketing, newsletter, cópia de Termos e Políticas, Regulamentos, informar mudanças nas Políticas internas e outras comunicações e propagandas entre o Usuário e a Suprema;')}
                    </Paragraph>
                    <Paragraph>
                        {t('r) Cumprir a obrigação de coleta e guarda de dados de conexão')}
                    </Paragraph>
                </Context>
                <Paragraph>
                   {t('Por sua vez, os dados de Confirmação de identidade, coletados a partir de ato voluntário do Usuário de ter sua conta verificada, são coletados principalmente com base no cumprimento de obrigação legal da Suprema.')}
                </Paragraph>
            </Content>
            <Content>
                <Paragraph>
                    {t('Sendo assim, a coleta desses dados tem como finalidade:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('a) Cumprimento de obrigações legais, incluindo a troca de informações com outras empresas e agências fiscalizadoras; ')}
                    </Paragraph>
                    <Paragraph>
                        {t('b) Cumprir as obrigações decorrentes do uso dos serviços;')}
                    </Paragraph>
                    <Paragraph>
                        {t('c) Cumprir e executar contrato de prestação de serviço;')}
                    </Paragraph>
                    <Paragraph>
                        {t('d) Atender aos interesses legítimos da')} <Span>{t('Suprema')}</Span> {('e garantir a defesa de seus direitos;')}
                    </Paragraph>
                    <Paragraph>
                        {t('e) Garantir a portabilidade dos Dados cadastrais para outro Controlador do mesmo ramo de nossa atuação, caso solicitado pelo Usuário;')}
                    </Paragraph>
                    <Paragraph>
                        {t('f) Efetivar aquisições, pagamentos, resgates, transações e outras operações solicitadas pelo Usuário.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('Por fim, os')} <Span>{t('Dados de Identificação Digital')}</Span>{t(', são coletados para analisar a jornada do usuário, mapear as áreas de calor, perfilar o interesse do Usuário, enriquecer a experiência e aprimorar os produtos e serviços, bem como para cumprimento de obrigação legal de guarda dos dados de conexão do Usuário.')}
                </Paragraph>
                <Paragraph>
                    {t('Muitos dos serviços dependem diretamente de alguns Dados informados acima, principalmente Dados cadastrais e identificação. Caso o Usuário decida não fornecer alguns desses Dados, a')}<Span>{t(' Suprema')}</Span> {t('poderá ficar impossibilitada de prestar total ou parcialmente os serviços disponibilizados.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('III.1. Marketing')}
                </Markes>
                <Paragraph>
                    {t('Se você se inscreveu em serviços oferecidos por nós, podemos enviar a você marketing direto em relação a outros serviços oferecidos por nós, desde que você tenha dado o seu consentimento para receber tal marketing.')}
                </Paragraph>
                <Paragraph>
                    {t('Também podemos usar as informações que você nos fornece para mostrar publicidade relevante e conteúdo personalizado sobre os serviços em certas plataformas de mídia social de terceiros, disponibilizados para nós por meio de provedores de serviços relevantes (como o Facebook).')}
                </Paragraph>
                <Paragraph>
                    {t('Se você não deseja ver esses anúncios, você pode alterar suas configurações nos Sites de Mídia Social. Se você não deseja que compartilhemos essas informações com Sites de Mídia Social, você pode nos contatar diretamente.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('IV. ATUALIZAÇÃO E VERACIDADE DOS DADOS')}
                </Markes>
                <Paragraph>
                    {t('Você é o único responsável pela precisão, veracidade ou falta dela em relação aos Dados que Você fornece ou pela sua desatualização. Fique atento, pois é de sua responsabilidade garantir a exatidão ou mantê-los atualizados.')}
                </Paragraph>
                <Paragraph>
                    {t('Da mesma forma, Nós não somos obrigados a processar ou tratar quaisquer dos seus Dados se houver razões para crer que tal processamento ou tratamento possa nos imputar qualquer infração de qualquer lei aplicável, ou se Você estiver utilizando as Plataformas para quaisquer fins ilegais ou ilícitos.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('V. BASE DE DADOS DA SUPREMA')}
                </Markes>
                <Paragraph>
                    {t('A base de dados formada por meio da coleta de Dados é de nossa propriedade e está sob nossa responsabilidade, sendo que seu uso, acesso e compartilhamento, quando necessários, serão feitos dentro dos limites e propósitos dos negócios descritos nesta Política.')}
                </Paragraph>
                <Paragraph>
                    {t('Todos os Dados Pessoais coletados são acessados somente por profissionais devidamente autorizados, respeitando os princípios de proporcionalidade, necessidade e relevância para os objetivos do nosso negócio, além do compromisso de confidencialidade e preservação da sua privacidade nos termos desta Política.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('VI. TECNOLOGIAS EMPREGADAS ')}
                </Markes>
                <Paragraph>
                    {t('Nós utilizamos as seguintes tecnologias:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('(i) Cookies, cabendo a Você configurar o seu navegador de Internet caso deseje bloqueá-los, inclusive a Política de Cookies poderá ser consultada diretamente no site. Nesta hipótese, algumas funcionalidades que oferecemos poderão ser limitadas.')}
                    </Paragraph>
                    <Paragraph>
                        {t('(ii) Além de tecnologias semelhantes aos cookies, como tags e pixels, há outras tecnologias como GPS, que permitem a coleta de informações, dependendo do tipo de dispositivo usado e das autorizações concedidas por Você para a Plataforma.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('Todas as tecnologias utilizadas respeitarão sempre a legislação vigente e os termos desta Política.')}
                </Paragraph>
                <Paragraph>
                    {t('No caso da geolocalização, Nós poderemos empregar decisões automatizadas, de forma a aprimorar a experiência do usuário durante o uso do Aplicativo, nos termos do disposto nesta Política e em acordo com a legislação vigente.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('VII. SOBRE O COMPARTILHAMENTO DOS DADOS E INFORMAÇÕES')}
                </Markes>
                <Paragraph>
                    {t('Os Dados coletados e as atividades registradas podem ser compartilhados:')}
                </Paragraph>
                <Context>
                   <Paragraph>
                    {t('(i) Com autoridades judiciais, administrativas ou governamentais competentes, sempre que houver determinação legal, requerimento, requisição ou ordem judicial; ')}
                   </Paragraph>
                   <Paragraph>
                    {t('(ii) De forma automática, em caso de movimentações societárias, como fusão, aquisição e incorporação da ')}<Span>{t('Suprema;')}</Span>
                   </Paragraph>
                   <Paragraph>
                    {t('(iii)Com empresas parceiras e fornecedores, especificamente àqueles que atuam no desenvolvimento tecnológico e na prestação de serviços voltados a Você, desde que devidamente aprovadas pelos nossos rígidos padrões de segurança. Essas transferências envolvem apenas empresas que demonstrem estar em conformidade com as leis aplicáveis, e mantenham um nível de compliance semelhante ou até mesmo mais rigoroso do que o nosso;')}
                   </Paragraph>
                   <Paragraph>
                    {t('(iv) Empresa de dados')}
                   </Paragraph>
                </Context>
                <Paragraph>
                    <Span>{t('Anonimização de Dados. ')}</Span>{t(' Para as finalidades de pesquisas de inteligência de mercado, divulgação de dados à imprensa e realização de propagandas, bem como fomentar novos projetos baseados na maior procura dos Usuários, os dados fornecidos por Você serão compartilhados de forma anonimizada, isto é, de forma que não possibilite a sua identificação.')}
                </Paragraph>
                <Paragraph>
                    <Span>{t('Compartilhamento dos seus dados em território nacional e internacional: ')}</Span>{t('Nós temos Parceiros que nos auxiliam a aumentar o nosso alcance no mercado, possibilitando o aprimoramento dos nossos serviços, agregando maior valor à comunidade. Esses Parceiros usualmente aparecerão em nossas redes sociais oficiais, em projetos públicos, propaganda, de modo que Você poderá consultá-los e conhecer os seus produtos e suas políticas. Por essa razão, seus dados coletados por nós poderão ser compartilhados em caso de realização de projetos de coparticipação dos nossos Parceiros, o que será devidamente identificado para Você.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('VIII. TEMPO DE ARMAZENAMENTO')}
                </Markes>
                <Paragraph>
                    {t('Os seus Dados Pessoais coletados e os registros das suas atividades são armazenados em ambiente seguro e controlado por um prazo mínimo, sendo:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        <Span>{t('Dados Cadastrais Simples:')}</Span> {t('Prazo de 05 anos após o término da relação (artigos 12 e 34 do Código de Defesa do Consumidor (“CDC”))')}
                    </Paragraph>
                    <Paragraph>
                        <Span>{t('Dados de Confirmação de identidade: ')}</Span>{t('Prazo de 05 anos após o término da relação (artigos 12 e 34 do CDC, Lei nº12.846/13, Decreto nº 8.420/15, Lei nº 12.683/2012 e Lei nº 9.613/98). ')}
                    </Paragraph>
                    <Paragraph>{t('A ')}
                        <Span>{t('Suprema ')}</Span>{t('poderá armazenar tais dados em caso de suspeita de fraude, lavagem de dinheiro, financiamento ao terrorismo e demais atividades ilícitas, o que estenderá o tratamento pelo prazo prescricional previsto para o delito investigado, sem prejuízo de comunicação dos fatos aos órgãos governamentais.')}
                    </Paragraph>
                    <Paragraph>
                        <Span>{t('Dados de Identificação Digital: ')}</Span>{t('Durante o período de 06 meses (artigo 15 do Marco Civil da Internet), salvo para amparar apuração de prática de fraudes no Aplicativo. Nesse caso, os dados poderão ser armazenados por 05 anos após o término da relação (artigos 12 e 34 do CDC, Lei nº12.846/13, Decreto nº 8.420/15, Lei nº 12.683/2012 e Lei nº 9.613/98). ')}
                    </Paragraph>
                    <Paragraph>
                        {t('Esse prazo será aplicado para os dados coletados na Security PKR.')}
                    </Paragraph>
                    <Paragraph>
                        <Span>{t('Dados sobre seus registros: ')}</Span>{t(' Prazo de 05 anos após o término da relação (artigos 12 e 34 do CDC, Lei nº12.846/13, Decreto nº 8.420/15, Lei nº 12.683/2012 e Lei nº 9.613/98). A Suprema poderá armazenar tais dados em caso de suspeita de fraude, lavagem de dinheiro, financiamento ao terrorismo e demais atividades ilícitas, o que estenderá o tratamento pelo prazo prescricional previsto para o delito investigado.')}
                    </Paragraph>
                    <Paragraph>
                        {t('Ainda, se você se autoexcluir de qualquer um de nossos serviços, reteremos essas informações pelos prazos acima. Já na hipótese de haver uma disputa legal, reteremos seus dados pessoais durante a disputa e por seis anos a partir de então.')}
                    </Paragraph>
                    <Paragraph>
                        {t('Ressaltamos que, para fins de auditoria, segurança, controle de fraudes e preservação de direitos, poderemos permanecer com o histórico de registro de seus Dados por prazo maior nas hipóteses que a lei ou norma regulatória assim estabelecer ou para preservação de direitos.')}
                    </Paragraph>
                    <Paragraph>
                        {t('Os Dados coletados poderão ser armazenados em servidores localizados no Brasil, bem como em ambiente de uso de recursos ou servidores na nuvem (cloud computing), o que poderá exigir uma transferência e/ou processamento destes Dados fora do Brasil. Ressaltamos que seus dados serão armazenados única e tão somente com empresas que tiverem o mesmo nível de segurança que a ')}<Span>{t('Suprema.')}</Span>
                    </Paragraph>
                </Context>
                <Content>
                    <Markes>
                        {t('IX. SEUS DIREITOS')}
                    </Markes>
                    <Paragraph>
                        {t('Você possui direitos garantidos pela legislação e a')}<Span>{t(' Suprema')}</Span> {t('garante que Você poderá exercê-los livremente, sendo:')}
                    </Paragraph>
                    <ContainerTable>
                        <TableLeft data={tableDireitos}/>
                    </ContainerTable>
                    <Italic>
                        {t('* Lembrando que Você só poderá informar dados verídicos e que condigam com a realidade dos fatos, isentando integral e ilimitadamente a')}<Span>{t(' Suprema ')}</Span>{('de qualquer declaração de falsidade eventualmente alegada.')}
                    </Italic>
                    <Italic>
                        {t('** Importante ressaltar que se Você retirar seu consentimento para finalidades fundamentais ao regular funcionamento das Plataformas e demais serviços, os quais poderão ficar indisponíveis para Você.')}
                    </Italic>
                    <Paragraph>
                        {t('Você poderá solicitar a exclusão de seus Dados Pessoais, porém teremos que mantê-los por período superior ao pedido de exclusão, conforme artigo 16 da Lei Geral de Proteção de Dados, sempre para:')}
                    </Paragraph>
                    <Context>
                        <Paragraph>
                            {t('(i) cumprimento de obrigação legal ou regulatória; ')}
                        </Paragraph>
                        <Paragraph>
                            {t('(ii) estudo por órgão de pesquisa; ')}
                        </Paragraph>
                        <Paragraph>
                            {t('(iii) transferência a terceiro (respeitados os requisitos de tratamento de dados dispostos na mesma Lei). Em todos os casos será feito mediante a anonimização dos Dados Pessoais, se possível.')}
                        </Paragraph>
                    </Context>
                    <Paragraph>
                        {t('Findos o prazo de manutenção e a necessidade legal, os Dados Pessoais serão excluídos com uso de métodos de descarte seguro, ou utilizados de forma anonimizada para fins estatísticos.')}
                    </Paragraph>
                </Content>
                <Content>
                    <Markes>
                        {t('X. COMO SE AUTOEXCLUIR')}
                    </Markes>
                    <Paragraph>
                        {t('Se você quiser excluir sua conta Suprema, basta seguir estas instruções:')}
                    </Paragraph>
                    <Context>
                        <Paragraph>
                            {t('a) Acesse o seu perfil no aplicativo;')}
                        </Paragraph>
                        <Paragraph>
                            {t('b) Escolha a opção "Excluir Conta";')}
                        </Paragraph>
                        <Paragraph>
                            {t('c) Digite seu ID de Jogador;')}
                        </Paragraph>
                        <Paragraph>
                            {t('d) Leia atentamente as informações:')}
                        </Paragraph>
                        <Context>
                            <Markes>
                                {t('Sua conta atual será excluída e não há como recuperá-la.')}
                            </Markes>
                            <Paragraph>
                                {t('Toda a propriedade será perdida, incluindo, entre outros, suas moedas de jogo, transações, ID, apelido e todas as outras informações. Você nunca mais poderá fazer login com a conta atual.')}
                            </Paragraph>
                        </Context>
                        <Paragraph>
                            {t('e) Se tiver certeza, escolha a opção "Tenho certeza”. Se não quiser excluir sua conta, escolha a opção "Cancelar”;')}
                        </Paragraph>
                        <Paragraph>
                            {t('f) Depois de escolher a opção "Tenho certeza”, digite sua senha e confirme-a uma segunda vez. ')}
                        </Paragraph>
                        <Paragraph>
                            {t('a) Se tudo estiver correto, escolha a opção "Excluir minha conta”.')}
                        </Paragraph>
                        <Paragraph>
                            {t('b) Você será direcionado à Etapa 3 para a confirmação final. Confirme a opção "Entendo perfeitamente o que estou fazendo” e escolha a opção "Excluir minha conta”. ')}
                        </Paragraph>
                    </Context>
                    <Paragraph>
                        {t('Depois de seguir essas etapas, sua conta atual do Suprema será excluída. Mas o Suprema Poker tem o dever legal de armazenar seus dados por um período de cinco anos, salvo identifique você praticou alguma fraude no âmbito do Aplicativo, o que fará o prazo aumentar para defesa dos interesses da Suprema, bem como para cumprir com suas obrigações legais e investigar qualquer má conduta realizada no aplicativo.')}
                    </Paragraph>
                    <Paragraph>
                        {t('Você também poderá solicitar a exclusão da sua conta atual, enviando um e-mail para security@suprema.group.')}
                    </Paragraph>
                </Content>
            </Content>
            <Content>
                <Markes>
                    {t('XI. PROTEJA OS SEUS DADOS')}
                </Markes>
                <Paragraph>
                    <Span>{t('Compartilhamento de senhas. ')}</Span>{t(' Você também é responsável pelo sigilo de seus Dados Pessoais, de modo que o compartilhamento de senhas e dados de acesso a esta Plataforma e ao Aplicativo viola esta Política e pode comprometer a segurança dos seus Dados.')}
                </Paragraph>
                <Paragraph>
                    {t('É muito importante que Você proteja seus Dados contra acesso não autorizado ao seu computador, celular, conta, senha, e-mail, aos dados dos seus documentos pessoais, além de evitar o compartilhamento dos dispositivos que utiliza para acessar as Plataformas. Também é muito importante que Você saiba que nós nunca enviaremos mensagens eletrônicas solicitando o fornecimento integral dos seus dados pessoais ou com anexos que possam ser executados (extensões: .exe, .com, entre outros) ou ainda links para eventuais downloads.')}
                </Paragraph>
                <Paragraph>
                    <Span>{t('Links externos.')}</Span> {t(' Quando Você utilizar a Plataforma, Você poderá ser conduzido, via link, a outros portais ou plataformas, que poderão coletar suas informações e ter sua própria Política de Tratamento de Dados. Caberá a Você ler a Políticas de Privacidade e Tratamento de Dados de tais portais, plataformas e aplicativos fora dos ambientes aqui identificados, sendo de sua responsabilidade aceitá-la ou rejeitá-la. Nós não somos responsáveis pelas Políticas de Privacidade e Tratamento de Dados de terceiros e nem pelo conteúdo de quaisquer websites conteúdo ou serviços ligados à ambientes que não os nossos.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('XII. SEGURANÇA')}
                </Markes>
                <Paragraph>
                    {t('Tomaremos medidas de segurança, técnicas e organizacionais adequadas para garantir que seus dados pessoais sejam mantidos em segurança e para evitar roubo, perda ou acesso não autorizado de seus dados pessoais. É importante compreender, entretanto, que a segurança nunca pode ser garantida e você não nos responsabilizará, exceto quando a segurança de seus dados pessoais for comprometida devido à nossa negligência.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('XIII. SOBRE ESSA POLÍTICA')}
                </Markes>
                <Paragraph>
                    {t('Você reconhece o nosso direito de alterar o teor desta Política a qualquer momento, conforme a finalidade ou necessidade, tal qual para adequação e conformidade legal de disposição de lei ou norma que tenha força jurídica equivalente, cabendo a Você verificá-la sempre que efetuar o acesso à Plataforma ou utilizar nossos serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('Ocorrendo atualizações neste documento e que demandem nova coleta de consentimento, Você será notificado por meio dos canais de contatos que Você informar.')}
                </Paragraph>
                <Paragraph>
                    <Span>{t('Inaplicabilidade. ')}</Span>{t(' Caso algum ponto desta Política seja considerado inaplicável por Autoridade de Dados ou judicial, as demais condições permanecerão em pleno vigor e efeito.')}
                </Paragraph>
                <Paragraph>
                   <Span>{t('Comunicação. ')}</Span> {t(' Você reconhece que toda comunicação realizada por e-mail (aos endereços informados no seu cadastro, seja na Plataforma, seja no Aplicativo), SMS, aplicativos de comunicação instantânea ou qualquer outra forma digital, também são válidas, eficazes e suficiente para a divulgação de qualquer assunto que se refira aos serviços que prestamos, aos seus Dados, bem como às condições de sua prestação ou a qualquer outro assunto nele abordado, sendo exceção apenas o que essa Política prever como tal.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('XIV. COMUNICAÇÃO')}
                </Markes>
                <Paragraph>
                    {t('Para otimizar e melhorar nossa comunicação, quando enviamos um e-mail para Você podemos receber uma notificação quando eles são abertos, desde que esta possibilidade esteja disponível. É importante Você ficar atento, pois os e-mails são enviados somente pelo domínio: <suprema.group>. ')}
                </Paragraph>
                <Paragraph>
                    {t(' Em caso de qualquer dúvida com relação às disposições constantes desta Política de Privacidade e Tratamento de Dados, o Cliente poderá entrar em contato por meio dos canais de atendimento apontados a seguir, ressalvado o prazo de até 3 (três) dias úteis para darmos um retorno:')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('Encarregado de Dados: ')}
                </Markes>
                <Paragraph>
                    {t('O Encarregado de Dados da Suprema poderá ser contatado em dpo@supremapoker.com.br. ')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('Para Crianças e Adolescentes com Idade Inferior a 18 Anos')}
                </Markes>
                <Paragraph>
                    {t('O cadastro na Plataforma é permitido SOMENTE para pessoas físicas plenamente capazes, nos termos da legislação brasileira, desde que concordem integralmente a presente Política de Privacidade e Proteção de Dados. Portanto, se você é menor de 18 anos, não se cadastre e nem utilize os nossos Serviços, e caso a Suprema identifique qualquer inconsistência ou fraude na sua declaração de idade, o cadastro será imediatamente cancelado e excluído.')}
                </Paragraph>
            </Content>

        </Container>
    )
}

export default withNamespaces()(PrivacyPolicy);