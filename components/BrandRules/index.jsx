import React from "react";
import { withNamespaces } from 'react-i18next';
import { Ancora, Container, Content, Context, Italic, Markes, Paragraph, Title } from "./styled";
import { Link } from "@material-ui/core";

function BrandRulesComponent ({t}) {

    const emailAddress = 'atendimento@suprema.group';

    const handleEmailSac = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const emailSecurity = 'security@supremapoker.com.br';

    const handleEmailSec = () => {
        window.location.href = `mailto:${emailSecurity}`;
    };

    return (
        <Container>
            <Title>{t('TERMOS E CONDIÇÕES GERAIS DE USO DO APLICATIVO SUPREMA POKER')}</Title>
            <Content>
                <Italic>{t('Play Money')}</Italic>
            </Content>
            <Content>
                <Paragraph>
                    {t('Você deverá ler com atenção os Termos e Condições Gerais (“T&C”), assim como a nossa Política de Privacidade, que estabelece como coletamos e usamos seus dados pessoais; as Regras da Comunidade, que trazem as regras de conduta na interação com os demais usuários do Aplicativo; Regras do Jogo Limpo; Regras de Jogos e recursos; e demais políticas aplicáveis (em conjunto, “Documentos”).')}
                </Paragraph>
                <Paragraph>
                    {t('O presente documento tem por objetivo definir as regras e procedimentos para a utilização do Aplicativo, bem como estabelecer outras regras relacionadas ao jogo realizado dentro do ambiente virtual e ao comportamento esperado dos Jogadores. O T&C e os Documentos constituem um contrato legal vinculativo entre você, Jogador de pôquer online (“Jogador”), e nós, a Empresa.')}
                </Paragraph>
                <Paragraph>
                    {t('Na ausência de previsão de tópico específico no presente T&C, você, Jogador, deverá conferir as Regras disponibilizadas no site')} <Link href="https://www.supremapoker.com.br/"><Ancora>www.supremapoker.com.br</Ancora></Link> {t('e no Aplicativo Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('Ao usar o Aplicativo e/ou ao marcar a caixa "Aceito estes Termos e Condições" (ou qualquer outro texto semelhante) e/ou ao realizar o download, instalar ou usar o Aplicativo, você concorda e aceita as regras do T&C em sua plenitude e sem reservas. Desse modo, este T&C constitui um contrato entre você e a Empresa.')}
                </Paragraph>
                <Paragraph>
                    {t('Recomendamos também que você acesse o T&C e os Documentos de tempos em tempos para verificar se há atualizações ou alterações que possam afetá-lo, pois em caso de não concordar com as eventuais alterações, não poderá acessar o Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('Se houver alguma dúvida em relação as regras previstas neste T&C e/ou nos Documentos, entre em contato conosco através do seguinte e-mail:')} <Ancora onClick={handleEmailSac} >atendimento@suprema.group</Ancora>
                </Paragraph>
            </Content>
            <Content>
                <Markes>{t('1. Definições:')}</Markes>
                <Paragraph>
                    {t('1.1. “Conta” significa uma conta que o Jogador cria ao acessar o Aplicativo, composta por nickname e ID de usuário.')}
                </Paragraph>
                <Paragraph>
                    {t('1.2. “Regras da Comunidade” significa as regras de conduta que regem a sua interação com os nossos Serviços e outros Jogadores. Está disponível no Aplicativo Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('1.3. “Conteúdo” significa qualquer informação, texto, gráfico, fotos ou outros materiais carregados e/ou baixados através do Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('1.4. “Jogo” significa jogar pôquer online por meio do Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('1.5. “Jogador” significa qualquer pessoa física maior de idade, em plena capacidade civil, que concorde com todas as disposições deste T&C e dos Documentos.')}
                </Paragraph>
                <Paragraph>
                    {t('1.6. “Serviços” significa a exploração do Jogo e demais serviços agregados prestados pela Empresa, que sejam necessários à viabilização do uso do Aplicativo pelo Jogador.')}
                </Paragraph>
                <Paragraph>
                    {t('1.7. “Software” significa o Aplicativo Suprema Poker, disponível para download através das plataformas Apple Store, Google Play e Windows.')}
                </Paragraph>
                <Paragraph>
                    {t('1.8. “Suprema Poker” significa o nome do Aplicativo de pôquer online de propriedade da Empresa.')}
                </Paragraph>
                <Paragraph>
                    {t('1.9. “Conteúdo do Usuário” significa todos os dados que o Jogador carrega, transmite, cria ou gera no ou por meio do Aplicativo, tais como foto de perfil, texto no jogo ou chat de vídeo, arte no jogo, entre outros.')}
                </Paragraph>
                <Paragraph>
                    {t('1.10. “Item virtual” significa uma moeda virtual ou um item virtual no Jogo.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>{t('2. ACORDO DE LICENÇA DE USUÁRIO FINAL')}</Markes>
                <Paragraph>
                    {t('2.1. Após realizar o download gratuito do Aplicativo, ao clicar no botão “Aceito” como parte do processo de instalação do Software, você concorda com todas as regras previstas neste T&C e Documentos.')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('2.1.1. A Empresa concede ao jogador o direito pessoal, intransferível, livre de royalties, não licenciável e revogável a qualquer tempo de instalar, acessar e utilizar o Aplicativo.     ')}
                    </Paragraph>
                    <Paragraph>
                        {t('2.1.2. O direito de uso do Aplicativo é exclusivamente para seu uso pessoal, não devendo ser utilizado por indivíduos (i) menores de idade, (ii) juridicamente incapazes e/ou (iii) residentes em jurisdições que considerem o pôquer uma atividade ilegal. A responsabilidade por assegurar a correta utilização do Aplicativo é exclusiva do Jogador.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('2.2. A Empresa é a única detentora de todos os direitos do Software, razão pela qual você não deve adotar qualquer medida que seja considerada como “Uso Não Autorizado do Aplicativo”, tais como:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('a. copiar, distribuir, modificar, traduzir o Software;')}
                    </Paragraph>
                    <Paragraph>
                        {t('b. fazer engenharia reversa, derivar o código fonte, modificar, descompilar, desmontar ou criar trabalhos derivados do Jogo, no todo ou em parte;')}
                    </Paragraph>
                    <Paragraph>
                        {t('c. tentar, de qualquer forma ou por qualquer meio, acessar o código fonte;')}
                    </Paragraph>
                    <Paragraph>
                        {t('d. sublicenciar, vender, transferir, alugar ou distribuir o Software;')}
                    </Paragraph>
                    <Paragraph>
                        {t('e. disponibilizar o software a terceiros por qualquer meio considerado ilícito;')}
                    </Paragraph>
                    <Paragraph>
                        {t('f. remover, desabilitar ou contornar quaisquer proteções de segurança ou quaisquer medidas técnicas que controlem o acesso ao Aplicativo;')}
                    </Paragraph>
                    <Paragraph>
                        {t('g. remover, modificar, desfigurar ou contornar quaisquer avisos de propriedade ou rótulos contidos no Aplicativo ou dentro dele;')}
                    </Paragraph>
                    <Paragraph>
                        {t('h. exportar ou reexportar o Software ou qualquer cópia ou adaptação em violação de quaisquer leis ou regulamentos aplicáveis;')}
                    </Paragraph>
                    <Paragraph>
                        {t('i. ciar dados ou programas executáveis ​​que imitem dados ou funcionalidade do Software;')}
                    </Paragraph>
                    <Paragraph>
                        {t('j. roubar e/ou publicar informações de outros usuários;')}
                    </Paragraph>
                    <Paragraph>
                        {t('k. usar, desenvolver, anunciar, comercializar, distribuir programas que interceptam a comunicação entre o Software e seu servidor.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('2.2.1. Você concorda que será responsável por qualquer dano causado direta ou indiretamente por uma ação ou omissão que seja considerada Uso Não Autorizado do Aplicativo. ')}
                </Paragraph>
                <Paragraph>
                    {t('2.2.2. Caso você tome conhecimento de Uso Não Autorizado do Aplicativo por qualquer pessoa, deverá comunicar a Empresa imediatamente, através do e-mail')} <Ancora onClick={handleEmailSec}>security@supremapoker.com.br</Ancora> <Link href="https://securitypkr.com.br/"><Ancora>(securitypkr.com.br)</Ancora></Link>  {t('sob pena de também ser considerado como responsável pelo dano causado.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>{t('3. INFORMAÇÕES DE CONTA, PRIVACIDADE E SEGURANÇA')}</Markes>
                <Paragraph>
                    {t('3.1. Nossa Política de Privacidade descreve como coletamos, armazenamos, usamos, divulgamos e processamos suas informações pessoais. Quando você usa nosso Aplicativo, você reconhece e concorda com a aplicação da nossa Política de Privacidade. Se você não deseja que coletemos, armazenemos, usemos ou compartilhemos suas informações das formas descritas em nossa Política de Privacidade, você não deve usar nosso Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('3.2. Qualquer informação que você forneça ao Aplicativo está sujeita à nossa Política de Privacidade, que rege a coleta e uso de suas informações. Você entende que, por meio do uso do Aplicativo, você concorda com a coleta e uso (conforme estabelecido na Política de Privacidade) dessas informações, incluindo a transferência dessas informações para outros países para armazenamento, processamento e uso pela Empresa dentro do seu legítimo interesse.')}
                </Paragraph>
                <Paragraph>
                    {t('3.3. Como parte dos Serviços, podemos precisar estabelecer com você determinadas comunicações, como notificações, atualizações, anúncios e mensagens administrativas. Nesses casos, você pode não conseguir cancelar o recebimento deles. Por favor, veja suas configurações para notificações por e-mail e celular para mais informações.')}
                </Paragraph>
                <Paragraph>
                    {t('3.4. Para a criação da Conta, podemos pedir que você selecione uma senha e/ou nos forneça certas informações pessoais, tais como seu nome completo, data de nascimento, endereço de e-mail e, em alguns casos, informações de pagamento. Essas informações serão mantidas e utilizadas de acordo com a Política de Privacidade da Empresa.')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('3.4.1. Você concorda em fornecer à Empresa informações precisas, completas e atualizadas.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.2. Você é responsável por manter a segurança de sua Conta. Não compartilhe os detalhes de sua Conta com outras pessoas, nem permita que outras pessoas acessem ou usem sua Conta. Trataremos todo e qualquer ato realizado por meio de sua Conta como tendo sido praticado por você. Você entende que poderá ser responsabilizado por eventuais danos causados por atos decorrentes da utilização da sua Conta, ainda que tenham sido praticados por terceiros.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.3. Você é responsável por salvaguardar a senha que usa para acessar o Aplicativo e sua Conta, bem como por quaisquer atividades ou ações realizadas sob sua senha. Nós encorajamos você a sempre usar senhas fortes, mediante a combinação de letras maiúsculas e minúsculas, números e símbolos. A Empresa não pode e não será responsável por qualquer perda ou dano decorrente da falha na salvaguarda de sua senha e/ou na utilização de senha considerada fraca.')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.4. Em caso de perda ou suspeita de roubo, fraude ou uso não autorizado de sua Conta e/ou senha, informe-nos imediatamente:')} <Link href="https://securitypkr.com.br/ "><Ancora>securitypkr.com.br</Ancora></Link> 
                    </Paragraph>
                </Context>
            </Content>
            <Content>
                <Markes>
                    {t('4. SERVIÇOS')}
                </Markes>
                <Paragraph>
                    {t('4.1. Os Serviços prestados estão em constante aprimoramento e podem sofrer alterações de tempos em tempos, sem aviso prévio. Além disso, a Empresa poderá deixar prestar os Serviços ou parte dos Serviços a qualquer momento de forma permanente ou temporária, ocasião em que o seu direito de uso será encerrado ou suspenso automaticamente. Se isso acontecer, a menos que a lei aplicável exija o contrário, a Empresa não será obrigada a fornecer qualquer tipo de compensação em relação aos Serviços descontinuados.')}
                </Paragraph>
                <Paragraph>
                    {t('4.2. Os Serviços poderão incluir anúncios, que poderão ser direcionados ao Conteúdo ou informações sobre os Serviços ou qualquer outra informação.')}
                </Paragraph>
                <Paragraph>
                    {t('4.3. A Empresa pode, a seu exclusivo critério, limitar, suspender, encerrar, modificar ou excluir Contas ou acesso aos Serviços, bem como remover conteúdo hospedado, sem qualquer obrigação de compensação.')}
                </Paragraph>
                <Paragraph>
                    {t('4.4. Você pode parar de usar o Aplicativo e/ou solicitar a exclusão de sua Conta a qualquer momento, seguindo as instruções de nossa Política de Privacidade.')}
                </Paragraph>
                <Paragraph>
                    {t('4.5. A Empresa realiza a manutenção em seu sistema de tempos em tempos, que às vezes poderá tornar parte dos recursos do Aplicativo indisponíveis. ')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('5. PROPRIEDADE')}
                </Markes>
                <Paragraph>
                    {t('5.1. O Aplicativo é composto por obras que pertencem e/ou são licenciadas pela Empresa e estão protegidos por direitos autorais, marca registrada, imagem comercial, patente e outros direitos de propriedade intelectual em todo o mundo. Todos esses direitos são reservados. O uso do Aplicativo não concede a você ou a qualquer outra parte qualquer direito, título ou interesse no Aplicativo ou em qualquer conteúdo do Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('5.2. Sua Conta não é sua propriedade. Da mesma forma, você não possui nenhum Item Virtual obtido por meio do Aplicativo, independentemente de tê-lo ganho e/ou adquirido. A sua Conta e os Itens Virtuais são propriedade da Empresa, o que dá a você direito de usá-los apenas enquanto usa o Aplicativo.     ')}
                </Paragraph>
                <Paragraph>
                    {t('5.3. Você não tem permissão para sublicenciar, negociar, vender ou tentar vender Itens Virtuais por dinheiro real, tampouco trocar Itens Virtuais por valor de qualquer tipo fora do Aplicativo. Qualquer transferência ou tentativa de transferência é proibida e nula, podendo ocasionar o encerramento de sua Conta.')}
                </Paragraph>
                <Paragraph>
                    {t('5.4. Se você postar, publicar, transmitir ou fazer upload de Conteúdo do Usuário no Aplicativo, concorda que (i) conterá informações precisas, (ii) não conterá informação confidencial, (iii) não conterá qualquer informação que viole qualquer legislação, (iv) não violará previsões contratuais ou direitos de outras partes, (v) estará livre de vírus, adware, spyware, worms ou outro código malicioso, e (vi) estará em conformidade com os Documentos.')}
                </Paragraph>
                <Paragraph>
                    {t('5.5. Seu Conteúdo do Usuário será processado pela Empresa de acordo com nossa Política de Privacidade. Você é o único responsável por proteger e fazer backup de seu conteúdo.')}
                </Paragraph>
                <Paragraph>
                    {t('5.6. Qualquer Conteúdo do Usuário que você postar, publicar ou transmitir será considerado não proprietário e não confidencial. Você retém todos os direitos de propriedade sobre o seu Conteúdo do Usuário, mas concede à Empresa uma licença perpétua e irrevogável, em todo o mundo, livre de royalties, não exclusiva, para usar, reproduzir, distribuir, preparar trabalhos derivados de, exibir e executar seu Conteúdo do Usuário e quaisquer trabalhos modificados e derivados em conexão com os Serviços, incluindo marketing e promoções. Na medida do permitido pelas leis aplicáveis, você renuncia a quaisquer direitos morais que possa ter sobre qualquer Conteúdo do Usuário (como o direito de ser identificado como o autor do Conteúdo do Usuário ou o direito de se opor a um determinado uso desse Conteúdo do Usuário).')}
                </Paragraph>
                <Paragraph>
                    {t('5.7. Temos o direito de remover qualquer Conteúdo do Usuário se, em nossa opinião, ele não estiver em conformidade com o T&C e Documentos. Também temos o direito de divulgar a sua identidade a qualquer terceiro que afirme que qualquer parte do seu Conteúdo do Usuário constitui uma violação dos direitos de propriedade intelectual ou do direito à privacidade. Também divulgaremos o seu Conteúdo do Usuário a terceiros ou órgãos governamentais quando formos legalmente obrigados a fazê-lo.')}
                </Paragraph>
                <Paragraph>
                    {t('5.8. Se você solicitar a exclusão do seu Conteúdo do Usuário, tomaremos as medidas cabíveis para removê-lo. Eventualmente, poderemos reter cópias do Conteúdo do Usuário, se assim for exigido por lei.')}
                </Paragraph>
                <Paragraph>
                    {t('5.9. Quando você posta, publica ou transmite suas observações e comentários, não podemos garantir que outros Jogadores não usarão as ideias e informações compartilhadas. Se você tem uma ideia ou informação que gostaria de manter em sigilo, não poste. A Empresa não é responsável pelo uso ou apropriação por qualquer outra pessoa de qualquer conteúdo ou informação que você poste, publique ou transmita em quaisquer salas de chat.')}
                </Paragraph>
                <Paragraph>
                    {t('5.10. Não temos nenhuma obrigação de monitorar o Aplicativo em busca de Conteúdo do Usuário impróprio ou ilegal, tampouco monitorar a conduta de Jogadores. Ao usar o Aplicativo, você entende que pode ser exposto a uma conduta praticada por outro usuário que considere ofensiva ou questionável. Não endossamos nenhum Conteúdo do Usuário, tampouco garantimos a veracidade ou precisão das informações ali contidas.')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('5.10.1. Embora não tenhamos qualquer obrigação de monitoramento, temos o direito, a nosso exclusivo critério, de monitorar, registrar ou armazenar suas interações ou suas comunicações com a Empresa e/ou com outro Jogador quando você estiver usando o Aplicativo – incluindo, sem limitar, suas comunicações por meio de texto no jogo. Para obter mais informações, consulte nossa Política de Privacidade e Regras da Comunidade.')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.10.2. Nós nos reservamos o direito de editar, recusar postar ou remover qualquer Conteúdo do Usuário ou qualquer outro material que considerarmos, a nosso exclusivo critério, como questionável. Se determinarmos que suas comunicações ou Conteúdo do Usuário violam este T&C e demais Documentos, temos o direito de desativar sua capacidade de postar Conteúdo do Usuário e/ou de comunicação com outros Jogadores, ou podemos encerrar totalmente o seu acesso ao Aplicativo, sem aviso prévio.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('5.11. Com a finalidade de evitar a retenção de dados que não sejam necessários, podemos excluir ou encerrar Contas consideradas inativas, assim entendidas como aquelas não conectadas por, no mínimo, 180 dias.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('6. INTERAÇÃO COM OUTROS JOGADORES')}
                </Markes>
                <Paragraph>
                    {t('6.1. Você é responsável por qualquer interação com outros Jogadores, devendo sempre observar as Regras da Comunidade. Se você tiver um problema com outro Jogador, não somos obrigados a nos envolver, mas nos reservamos o direito de fazê-lo se julgarmos necessário.')}
                </Paragraph>
                <Paragraph>
                    {t('6.2. Você reconhece que, caso tenha uma disputa com outro Jogador, você isentará a Empresa de responsabilidades, reclamações, demandas e/ou danos (reais ou indiretos) de todo tipo e natureza, conhecidos ou não, resultantes dessa disputa ou relacionados a essa disputa.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('7. TERMOS DE PAGAMENTO')}
                </Markes>
                <Paragraph>
                    {t('7.1. Nosso Jogo é gratuito; porém, você pode comprar Itens Virtuais para acessar certos recursos. Essa compra poderá ser feita por meio da plataforma da Apple Store, Google Play ou Windows. A Empresa não participa dessa transação, de modo que a sua compra será regida pelos termos e condições de pagamento da plataforma de terceiros. Reveja os termos de serviço da plataforma para obter informações adicionais. ')}
                </Paragraph>
                <Paragraph>
                    {t('7.2. Você obterá o direito de usar os Itens Virtuais após a conclusão da transação de compra.')}
                </Paragraph>
                <Paragraph>
                    {t('7.3. Qualquer saldo de moeda virtual mostrado em sua Conta não constitui um saldo em moeda real ou reflete qualquer valor armazenado, representando, apenas, uma medida da extensão do seu direito de acesso e de uso.')}
                </Paragraph>
                <Paragraph>
                    {t('7.4. Você concorda que as compras de Itens Virtuais não são reembolsáveis, mesmo quando não utilizados, independentemente do motivo.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('8. PUBLICIDADE')}
                </Markes>
                <Paragraph>
                    {t('8.1. Nosso Aplicativo pode apresentar anúncios nossos ou de outras empresas. Consulte nossa Política de Privacidade sobre as informações que compartilhamos com os anunciantes.')}
                </Paragraph>
                <Paragraph>
                    {t('8.2. Você concorda que temos permissão para fornecer links em nosso Jogo que podem convidá-lo a participar de uma oferta promocional e/ou oferecer algum recurso ou upgrade. A aceitação de qualquer oferta nesse sentido será de sua exclusiva responsabilidade.')}
                </Paragraph>
                <Paragraph>
                    {t('8.3. Não temos responsabilidade por nenhum site de terceiros vinculado ao Aplicativo e sua divulgação não significa que endossamos ou aprovamos esse site ou qualquer informação que venha a ser obtida através dele. Não somos responsáveis por qualquer reclamação relativa a conteúdo, bens e/ou serviços de terceiros.')}
                </Paragraph>
                <Paragraph>
                    {t('8.4. Você entende que os sites de terceiros vinculados não estão sob nosso controle e podem coletar dados ou solicitar que você forneça informações pessoais, bem como podem coletar automaticamente informações suas. Quando você usa esses sites e serviços de terceiros, a empresa terceirizada pode (ou não) solicitar permissão para acessar suas informações e conteúdo. Não somos responsáveis pelo conteúdo, práticas comerciais ou políticas de privacidade dessas outras empresas, ou pela forma como elas coletam, usam ou compartilham as informações obtidas.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('9. ISENÇÃO DE GARANTIA')}
                </Markes>
                <Paragraph>
                    {t('9.1. Não é possível garantir que o Aplicativo e/ou qualquer conteúdo estarão sempre disponíveis ou livres de erros. Oscilações poderão ocorrer em razão da prestação de serviços de terceiros ou em decorrência de falhas tecnológicas. Em ambos os cenários a Empresa envidará o melhor dos seus esforços para reestabelecer os serviços com a maior brevidade possível. Nós nos reservamos o direito de suspender, retirar ou restringir a disponibilidade de todo ou parte do conteúdo do Aplicativo por motivos comerciais, legais e/ou operacionais.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('10. LIMITAÇÕES E RENÚNCIA DE RESPONSABILIDADE')}
                </Markes>
                <Paragraph>
                    {t('10.1. Você concorda que a Empresa não é responsável:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('a. por quaisquer danos indiretos, incidentais, especiais, exemplares, punitivos ou consequentes, incluindo lucros cessantes, boa vontade, direitos comerciais ou dados, de qualquer forma decorrentes do uso ou incapacidade de uso do Aplicativo;')}
                    </Paragraph>
                    <Paragraph>
                        {t('b. pela conduta de terceiros, incluindo outros Jogadores e operadores de sites externos.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('10.2. Qualquer risco decorrente do uso do Aplicativo é inteiramente seu.')}
                </Paragraph>
                <Paragraph>
                    {t('10.3. Algumas jurisdições não permitem a exclusão ou limitação de responsabilidade por danos consequentes ou incidentais, portanto, as limitações acima são limitadas à extensão máxima permitida pela lei aplicável em tais países ou jurisdições.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('11. INDENIZAÇÃO')}
                </Markes>
                <Paragraph>
                    {t('11.1. Você concorda em indenizar, salvaguardar e isentar a Empresa de responsabilidade perante quaisquer reclamações, perdas, danos, responsabilidades, incluindo taxas e despesas legais, decorrentes do uso ou mau uso do Aplicativo, qualquer violação por você destes termos ou qualquer violação das representações, garantias e convênios feitos por você neste documento. A Empresa se reserva o direito, às suas custas, de assumir a defesa e controle exclusivos de qualquer assunto pelo qual seja obrigada a indenizar, e você concorda em cooperar com a defesa da Empresa em relação a essas reivindicações. A Empresa envidará todos os esforços razoáveis para notificá-lo de qualquer reclamação, ação ou procedimento ao tomar conhecimento disso. Você concorda que as disposições desta seção de Indenização sobreviverão a qualquer encerramento de sua Conta (se aplicável) ou de seu acesso ou uso do Aplicativo.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('12. SEPARAÇÃO DE TERMOS')}
                </Markes>
                <Paragraph>
                    {t('12.1. Cada item deste instrumento produz efeito separadamente. Se alguma disposição se tornar inválida ou inexequível, o restante não será afetado, sendo válido e exequível em toda a extensão permitida por lei.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('13. ATRIBUIÇÃO')}
                </Markes>
                <Paragraph>
                    {t('13.1. Podemos ceder nossos direitos e/ou obrigações a qualquer pessoa ou entidade a qualquer momento, com ou sem o seu consentimento. Você não deve ceder seus direitos e/ou obrigações a ninguém sem o consentimento por escrito da Empresa, e qualquer tentativa de fazê-lo sem o nosso consentimento será nula.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('14. AVISOS')}
                </Markes>
                <Paragraph>
                    {t('14.1 Se tivermos que enviar a você qualquer comunicação, podemos notificá-lo via mensagem no Aplicativo, através de e-mail ou usando outras formas de comunicação com base nas informações de contato que você fornecer.')}
                </Paragraph>
                <Paragraph>
                    {t('14.2. Sempre que precisar entrar em contato conosco, pedimos que envie um e-mail para')} <Ancora onClick={handleEmailSac}>atendimento@suprema.group</Ancora> {t('ou entre em contato com a Security PKR.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('15. SEM RENÚNCIA')}
                </Markes>
                <Paragraph>
                    {t('15.1. Se não fizermos cumprir nossos direitos sob este T&C e/ou Documentos, isso não renuncia ao nosso direito de fazê-lo posteriormente. E, se renunciarmos expressamente a uma disposição deste T&C e/ou Documentos, isso não significa que seja dispensada para sempre no futuro. Se renunciarmos a uma inadimplência ou violação de sua parte, apenas o faremos por escrito, e isso não significa que renunciaremos automaticamente a qualquer inadimplemento ou violação posterior de sua parte.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('16. FORÇA MAIOR')}
                </Markes>
                <Paragraph>
                    {t('16.1. Não somos responsáveis por quaisquer alterações ou problemas fora do nosso controle, como, por exemplo, alterações ou problemas causados por desastres naturais, guerra, terrorismo, motins, embargos, atos de autoridades civis ou militares ou governo local, incêndio, inundações, acidentes, infraestrutura de rede falhas, greves ou falta de transporte, instalações, combustível, energia, mão de obra ou materiais.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('17. LEI APLICÁVEL E JURISDIÇÃO')}
                </Markes>
                <Paragraph>
                    {t('17.1. Este T&C e Documentos, bem como o Aplicativo e Serviços, são regidos pelas leis do Brasil.')}
                </Paragraph>
            </Content>
        </Container>
    )

}

export default withNamespaces()(BrandRulesComponent)