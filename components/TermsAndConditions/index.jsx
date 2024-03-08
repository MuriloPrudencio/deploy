import React from "react";
import { withNamespaces } from 'react-i18next';
import { Ancora, Container, Content, Context, Markes, Paragraph, Title } from "./styled";
import Link from "next/link";

function TermsAndConditions ({t}) {

    const emailAtend = 'atendimento@suprema.group';

    const handleEmailAtend = () => {
        window.location.href = `mailto:${emailAtend}`;
    };

    return (
        <Container>
            <Title>{t('TERMOS E CONDIÇÕES GERAIS DE USO')}</Title>
            <Content>
                <Paragraph>
                    {t('Estes Termos e Condições ("T&C") e os documentos referidos e vinculados abaixo ("Documentos") estabelecem a base sobre a qual o aplicativa Suprema Poker ("App") opera e seus serviços relacionados ("Serviços") serão fornecidos a você, nossa Política de Privacidade, nossas Regras da Comunidade e quaisquer outras políticas da Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('Por favor, leia estes T&C e os Documentos com muita atenção, pois eles constituem um contrato legal vinculativo entre você, um Jogador de pôquer online (\"Jogador\"), e nós, Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('Recomendamos também que você verifique os T&C e os Documentos de tempos em tempos para verificar se há atualizações ou alterações que possam afetá-lo e, se você não aceitar as alterações, não poderá acessar sua conta.')}
                </Paragraph>
                <Paragraph>
                    {t('Se algo não estiver claro para você, entre em contato conosco através do seguinte e-mail:')} <Ancora onClick={handleEmailAtend}>atendimento@suprema.group</Ancora> 
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('1. Definições')}
                </Markes>
                <Paragraph>
                    {t('1.1. \"Conta\" significa uma conta que você cria ao acessar o Aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('1.2. \"Regras da Comunidade\" significa todas as regras de conduta que regem a sua interação com os nossos Serviços e outros Jogadores, incluindo todas as regras pertinentes aos Jogos que estarão disponíveis no site da Suprema e demais canais oficiais.')}
                </Paragraph>
                <Paragraph>
                    {t('1.3. “Conteúdo” significa qualquer informação, texto, gráfico, fotos ou outros materiais carregados e / ou baixados através de nosso aplicativo.')}
                </Paragraph>
                <Paragraph>
                    {t('1.4. “Termos do Recurso” significa quaisquer outras regras relacionadas a serviços específicos, como plataformas e APIs, aplicativos para dispositivos móveis, fóruns, concursos, assinaturas ou programas de fidelidade que possamos publicar.')}
                </Paragraph>
                <Paragraph>
                    {t('1.5. “Jogo” significa jogar pôquer online por meio do aplicativa Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('1.6. “Ofertas” significa programas especiais, incluindo ofertas, excursões e presentes especiais, tanto digitais quanto táteis, que a Suprema Poker pode oferecer de tempos em tempos a certos Jogadores elegíveis.')}
                </Paragraph>
                <Paragraph>
                    {t('1.7. “Jogador” significa qualquer pessoa física em plena capacidade civil, maior de idade, que concorde com todas as disposições deste T&C e dos Documentos.')}
                </Paragraph>
                <Paragraph>
                    {t('1.8. “Serviços” significa nosso Jogo, Serviços, Conteúdo, SMS, APIs, notificações por e-mail, aplicativos, botões, widgets, anúncios, serviços de comércio, domínios ou sites, incluindo, mas não se limitando a https://www.supremapoker.com.br/ e outros serviços cobertos que estão vinculados a este T&C e documentos.')}
                </Paragraph>
                <Paragraph>
                    {t('1.9. “Suprema Poker” significa o nome do aplicativo de pôquer online de propriedade da Suprema Poker')}
                </Paragraph>
                <Paragraph>
                    {t('1.10. “Conteúdo do usuário” significa todos os dados que você carrega, transmite, cria ou gera no ou por meio do Aplicativo. Isso inclui coisas como sua foto de perfil, seu texto no jogo ou chat de vídeo e sua arte no jogo ou outro conteúdo criado ou projetado por você.')}
                </Paragraph>
                <Paragraph>
                    {t('1.11. “Item virtual” significa uma moeda virtual a ser usada nos Serviços ou um item virtual no jogo.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('2. INFORMAÇÕES DE CONTA, PRIVACIDADE E SEGURANÇA')}
                </Markes>
                <Paragraph>
                    {t('2.1. Nossa Política de Privacidade descreve como coletamos, armazenamos, usamos, divulgamos e de outra forma processamos suas informações pessoais ao fornecer nossos Serviços a você, e seus direitos e escolhas em relação às suas informações. Quando você usa nossos Serviços, você reconhece e concorda que nossa Política de Privacidade se aplica. Se você não deseja que coletemos, armazenemos, usemos ou compartilhemos suas informações das formas descritas em nossa Política de Privacidade, você não deve usar nossos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('2.2. Qualquer informação que você ou outros usuários forneçam a Suprema Poker está sujeita à nossa Política de Privacidade, que rege nossa coleta e uso de suas informações. Você entende que, por meio do uso dos Serviços, você concorda com a coleta e uso (conforme estabelecido na Política de Privacidade) dessas informações, incluindo a transferência dessas informações para outros países para armazenamento, processamento e uso pela Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('2.3. Como parte dos Serviços, podemos precisar estabelecer com você determinadas comunicações, como notificações, atualizações, anúncios e mensagens administrativas. Nesses casos, você pode não conseguir cancelar o recebimento deles. Por favor, veja suas configurações para notificações por e-mail e celular para mais informações.')}
                </Paragraph>
                <Paragraph>
                    {t('2.4. Podemos pedir que você crie uma conta e selecione uma senha e / ou nos forneça certas informações pessoais, que podem incluir seu nome, data de nascimento, endereço de e-mail e, em alguns casos, informações de pagamento, para usar nossos Serviços. Essas informações serão mantidas e utilizadas de acordo com a Política de Privacidade da Suprema Poker.')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('2.4.1. Você concorda em fornecer aa Suprema Poker informações precisas, completas e atualizadas, especialmente o seu endereço de e-mail.')}
                    </Paragraph>
                    <Paragraph>
                        {t('2.4.2. Você é responsável por manter a segurança de sua conta. Não compartilhe os detalhes de sua conta com outras pessoas nem permita que outras pessoas acessem ou usem sua conta. Trataremos todos os atos realizados por meio de sua Conta como sendo realizados por você. Você, portanto, aceita a responsabilidade por todos os atos realizados usando sua Conta, autorizados ou não por você, incluindo compras feitas usando qualquer instrumento de pagamento dos itens virtuais, e você entende que pode ser responsabilizado por perdas incorridas por nós ou qualquer outro usuário dos Serviços causado por outra pessoa usando sua conta.')}
                    </Paragraph>
                    <Paragraph>
                        {t('2.4.3. Você é responsável por salvaguardar a senha que usa para acessar os Serviços e por quaisquer atividades ou ações sob sua senha. Nós encorajamos você a usar senhas “fortes” (senhas que usam uma combinação de letras maiúsculas e minúsculas, números e símbolos) com sua conta. Suprema Poker não pode e não será responsável por qualquer perda ou dano decorrente do não cumprimento do acima.')}
                    </Paragraph>
                    <Paragraph>
                        {t('2.4.4. Se você souber de qualquer perda real ou suspeita, roubo, fraude ou uso não autorizado de sua conta ou senha da conta, informe-nos imediatamente.')}
                    </Paragraph>
                </Context>
            </Content>
            <Content>
                <Markes>
                    {t('3. TERMOS BÁSICOS')}
                </Markes>
                <Paragraph>
                    {t('3.1. Você é responsável por seu uso dos Serviços, por qualquer conteúdo de usuário que você carregue, transmita, crie ou gere nos ou por meio dos Serviços e por quaisquer consequências disso. A maior parte do conteúdo do usuário é público por padrão e poderá ser visualizado por outros usuários e por meio de serviços e sites de terceiros. Você só deve fornecer conteúdo de usuário que se sinta confortável em compartilhar com outras pessoas de acordo com estes Termos.')}
                </Paragraph>
                <Paragraph>
                    {t('3.2. Você pode usar os Serviços apenas se puder firmar um contrato vinculativo com a Suprema Poker e não for uma pessoa impedida de receber os Serviços de acordo com as leis de qualquer jurisdição aplicável. Se você está aceitando estes Termos e usando os Serviços em nome de uma empresa, organização, governo ou outra entidade legal, você declara e garante que está autorizado a fazê-lo. Você pode usar os Serviços apenas em conformidade com estes Termos e todas as leis, regras e regulamentos locais, estaduais, nacionais e internacionais aplicáveis.')}
                </Paragraph>
                <Paragraph>
                    {t('3.3. Suprema Poker fornece Serviços apenas para uso pessoal, na idade legal, para fins de entretenimento. Você concorda em não violar os termos e condições definidos neste Termo de Serviço. Você também concorda em não usar os Serviços para qualquer outra finalidade e concorda que a Suprema Poker não terá qualquer responsabilidade para com você por quaisquer danos ou perdas decorrentes de usos não autorizados.')}
                </Paragraph>
                <Paragraph>
                    {t('3.4. Você concorda em usar apenas os Serviços, ou qualquer parte deles, de maneira consistente com estes T&C e NÃO DEVE:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('3.4.1. Sem permissão por escrito da Suprema Poker, usar comercialmente, anunciar ou explorar de qualquer maneira os Serviços ou qualquer uma de suas partes;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.2. Fazer engenharia reversa, derivar o código-fonte, modificar, descompilar, desmontar ou criar trabalhos derivados do Jogo, no todo ou em parte (exceto conforme expressamente permitido pela lei aplicável, caso em que todas e quaisquer modificações, adaptações e melhorias legais , etc., e todos os direitos autorais e direitos morais nele contidos, serão considerados atribuídos a, e pertencerão, serão adquiridos e propriedade exclusiva da Suprema Poker e / ou de seus licenciados na criação, em qualquer caso);')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.3. Remover, desabilitar ou contornar quaisquer proteções de segurança ou quaisquer medidas técnicas que controlem o acesso ao Jogo;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.4. Remover, modificar, desfigurar ou contornar quaisquer avisos de propriedade ou rótulos contidos no Jogo ou dentro dele;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.5. Exportar ou reexportar o Jogo ou qualquer cópia ou adaptação em violação de quaisquer leis ou regulamentos aplicáveis;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.6. Criar dados ou programas executáveis ​​que imitem dados ou funcionalidade do Jogo;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.7. Roubar e / ou publicar informações de outros usuários (incluindo, mas não se limitando a, informações pessoais, informações não pessoais e informações de pagamento);')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.8. Personificar ou prejudicar a reputação da Suprema Poker ou dos Serviços;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.9. Postar, vincular, anunciar, promover ou transmitir qualquer coisa que seja ilegal, prejudicial, ameaçadora, abusiva, assediadora, torturante, difamatória, vulgar, sexualmente explícita, obscena, odiosa ou racial ou etnicamente ofensiva;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.10. Tirar vantagem explorando outros de qualquer forma;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.11. Explorar erros e bugs encontrados durante o jogo;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.12. Acessar ou usar os Serviços para qualquer finalidade que seja ilegal ou além do escopo do uso pretendido dos Serviços (a critério exclusivo da Suprema Poker);')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.13. Usar / desenvolver / anunciar / comercializar / distribuir programas que interceptam a comunicação entre o Jogo e o servidor do Jogo; quaisquer programas não autorizados de terceiros ou dispositivos de hardware que possam afetar o jogo ou o jogo normal, incluindo, mas não se limitando a, hacks, cheats, helpers, bots, scripts, treinadores, programas automáticos, programas que coletam ou modificam os dados do jogo lendo o jogo memória;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.14. Desrespeitar ou usar palavras ofensivas para com os outros com base em sua raça, sexo, nacionalidade;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.15. Manipular os resultados do jogo de forma injusta;')}
                    </Paragraph>
                    <Paragraph>
                        {t('3.4.16. Qualquer ação que não esteja definida nestes T&C que afete negativamente a entrega dos Serviços ou afete negativamente outros usuários pode estar sujeita a advertências e penalidades por meio de uma análise cuidadosa das circunstâncias.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('3.5. Em caso de encerramento da Conta devido ao descumprimento dos termos do parágrafo acima é proibida a criação de novas contas. Qualquer tentativa futura de criação de conta após ser banido do serviço será considerada uma violação deste Acordo e resultará no encerramento de tais contas.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('4. SERVIÇOS')}
                </Markes>
                <Paragraph>
                    {t('4.1. Os serviços prestados estão sempre evoluindo e podem mudar de tempos em tempos sem aviso prévio, sendo que todas as mudanças nos serviços e Regras da Comunidade estarão nestes T&C e/ou no site da Suprema, cabendo ao Usuário verifica-las antes de utilizar os serviços. Além disso, a Suprema Poker reserva-se ao direito de deixar de oferecer e / ou apoiar os Serviços ou parte dos Serviços a qualquer momento de forma permanente ou temporária, momento em que o seu direito de usar os Serviços ou qualquer parte deles será encerrado ou suspenso automaticamente. Se isso acontecer, a menos que a lei aplicável exija o contrário, a Suprema Poker não é obrigada a fornecer reembolsos, benefícios ou outra compensação a você em conexão com elementos descontinuados dos Serviços ou para Itens Virtuais anteriormente ganhos ou comprados.')}
                </Paragraph>
                <Paragraph>
                    {t('4.2. Suprema Poker também detém o direito de criar limites de uso e armazenamento a nosso exclusivo critério, a qualquer momento, sem aviso prévio. Os Serviços podem incluir anúncios, que podem ser direcionados ao Conteúdo ou informações sobre os Serviços, consultas feitas por meio dos Serviços ou qualquer outra informação.')}
                </Paragraph>
                <Paragraph>
                    {t('4.3. Suprema Poker pode, a seu exclusivo critério, limitar, suspender, encerrar, modificar ou excluir Contas ou acesso aos Serviços ou qualquer parte deles; proibir o acesso aos nossos jogos e sites, e seu conteúdo, serviços e ferramentas; ou atrasar ou remover conteúdo hospedado. A Suprema Poker não tem obrigação de compensá-lo por quaisquer perdas ou resultados.')}
                </Paragraph>
                <Paragraph>
                    {t('4.4. Para acessar ou jogar nossos jogos ou criar uma conta conosco, podemos precisar do seu endereço de e-mail e / ou conta de rede social, como a conta do Facebook. Você pode precisar atualizar o software de terceiros de tempos em tempos para receber os Serviços e jogar os jogos da Suprema Poker.')}
                </Paragraph>
                <Paragraph>
                    {t('4.5. Nós fornecemos os jogos e outros serviços. Você fornece o equipamento (computador, telefone, tablet, etc.) e paga quaisquer taxas para se conectar à Internet e lojas de aplicativos e para uso de dados ou celular para baixar e usar os Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('4.6. Você pode parar de usar nossos Serviços a qualquer momento e pode solicitar que excluamos sua conta a qualquer momento, seguindo as instruções em nossa Política de Privacidade. A menos que a lei aplicável exija o contrário, não somos obrigados a fornecer reembolsos, benefícios ou outra compensação se você solicitar o cancelamento de sua conta.')}
                </Paragraph>
                <Paragraph>
                    {t('4.7. Se você usar nossos Serviços, você deve seguir as Regras da Comunidade da Suprema Poker, Política de Privacidade e todos os outros Termos de Recursos que podem ser aplicáveis que estarão neste T&C, no site da Suprema e mais canais oficiais, o que deverá ser certificado por você ao utilizar os serviços. Essas regras e termos adicionais aplicam-se em adição a estes T&C. Se você acessar os Serviços de uma rede social, como Facebook, ou baixar os Serviços de outra plataforma, como Apple ou Google, você também deve cumprir os termos de serviço / uso de terceiros, bem como estes T&C..')}
                </Paragraph>
                <Paragraph>
                    {t('4.8. Podemos fornecer promoções e ofertas por tempo limitado e as regras oficiais correspondentes ou Termos de Recursos (se houver) associados a quaisquer promoções e ofertas serão aplicados além desses T&C. Para evitar dúvidas, não somos obrigados a dar, e você não é obrigado a aceitar, tais ofertas. Essas ofertas não são transferíveis, resgatáveis ​​ou trocáveis ​​por outras coisas de valor, exceto a nosso exclusivo critério. Se você aceitar qualquer oferta, poderá ter que assinar uma declaração de elegibilidade e liberação de responsabilidade ou outra papelada para receber a oferta. Algumas ofertas estarão sujeitas a impostos e outros encargos, viagens ou atividades fora do mundo virtual, os quais serão divulgados antes de você aceitar a oferta. Se você aceitar qualquer oferta, assumirá todas as responsabilidades associadas à oferta.')}
                </Paragraph>
                <Paragraph>
                    {t('4.9.Você reconhece e concorda que Suprema Poker pode atualizar o Serviço com ou sem notificá-lo. A Suprema Poker pode exigir que você aceite atualizações do Serviço e você também pode precisar atualizar o software de terceiros de tempos em tempos para receber o Serviço. A Suprema Poker realiza trabalhos de manutenção em seu sistema de tempos em tempos. Uma parte ou, às vezes, todos os recursos do Serviço podem não estar disponíveis durante os períodos de manutenção. Todos os problemas encontrados durante o uso do Serviço, incluindo aqueles relacionados à Sua Conta, podem ser relatados entrando em contato com ')} <Ancora onClick={handleEmailAtend}>atendimento@suprema.group</Ancora> 
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('5. PROPRIEDADE')}
                </Markes>
                <Paragraph>
                    {t('5.1. Os Serviços são compostos por obras que pertencem ou são licenciadas pela Suprema Poker, E estão protegidos por direitos autorais, marca registrada, imagem comercial, patente e outros direitos de propriedade intelectual em todo o mundo e outras leis, normas ou regulamentos aplicáveis. Todos esses direitos são reservados. O uso do Aplicativo não concede a você ou a qualquer outra parte qualquer direito, título ou interesse nos Serviços ou em qualquer conteúdo dos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('5.2. A violação de qualquer critério nestes T&C pode levar à suspensão temporária ou permanente dos Serviços e quaisquer outras ações legais. Além disso, você pode estar infringindo a lei, incluindo violações ou violações de direitos de propriedade intelectual. Qualquer tentativa de interromper ou interferir com os Serviços, incluindo (sem limitação) minar ou manipular a operação legítima de qualquer Jogo, é uma violação da política da Suprema Poker e pode ser uma violação ou violação das leis civis e criminais.')}
                </Paragraph>
                <Paragraph>
                    {t('5.3. Sua conta não é sua propriedade. Da mesma forma, você não possui nenhum item virtual obtido por meio de nossos serviços, independentemente de tê-lo ganho ou adquirido. A sua conta e quaisquer itens virtuais relacionados são propriedade da Suprema Poker, o que lhe dá uma licença limitada e direito de usar a sua conta e os itens virtuais relacionados ao mesmo tempo que lhe oferece os serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('5.4. Você não tem permissão para transferir Itens virtuais para fora dos Serviços, vendendo, presenteando ou trocando-os. Não reconheceremos essas transferências como legítimas. Você não tem permissão para sublicenciar, negociar, vender ou tentar vender Itens Virtuais por dinheiro “real”, ou trocar Itens Virtuais por valor de qualquer tipo fora de um jogo. Qualquer transferência ou tentativa de transferência é proibida e nula, e podemos encerrar sua conta por causa disso.')}
                </Paragraph>
                <Paragraph>
                    {t('5.5. Se você postar, publicar, transmitir ou fazer upload de Conteúdo do Usuário nos Serviços, concorda que será:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('5.5.1. Preciso;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.5.2. Não é confidencial;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.5.3. Não viole a lei;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.5.4. Não em violação de restrições contratuais ou direitos de outras partes, e que você tem permissão para usar o Conteúdo do Usuário de qualquer outra parte cujas informações pessoais ou outras informações ou propriedade intelectual estejam contidas no Conteúdo do Usuário;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.5.5. Livre de vírus, adware, spyware, worms ou outro código malicioso;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.5.6. Em conformidade com nossa Política de Privacidade e Regras da Comunidade.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('5.6. Seu Conteúdo do Usuário será processado pela Suprema Poker de acordo com nossa Política de Privacidade. Você é o único responsável por proteger e fazer backup de seu conteúdo.')}
                </Paragraph>
                <Paragraph>
                    {t('5.7. Qualquer Conteúdo do Usuário que você postar, publicar ou transmitir será considerado não proprietário e não confidencial. Você retém todos os seus direitos de propriedade sobre o seu Conteúdo do Usuário, mas dá à Suprema Poker uma licença perpétua e irrevogável (exceto conforme fornecido abaixo ou em nossa Política de Privacidade), em todo o mundo, livre de royalties, não exclusiva, licença para usar, reproduzir, distribuir, preparar trabalhos derivados de exibir e executar seu Conteúdo do usuário e quaisquer trabalhos modificados e derivados em conexão com os Serviços, incluindo marketing e promoções. Na medida do permitido pelas leis aplicáveis, você renuncia a quaisquer direitos morais que possa ter sobre qualquer Conteúdo do Usuário (como o direito de ser identificado como o autor do Conteúdo do Usuário ou o direito de se opor a um determinado uso desse Conteúdo do Usuário).')}
                </Paragraph>
                <Paragraph>
                    {t('5.8. Temos o direito de remover qualquer Conteúdo do usuário se, em nossa opinião, ele não estiverem em conformidade com os T&C, nossa Política de Privacidade, nossas Regras da Comunidade ou quaisquer Termos de Recursos aplicáveis. Também temos o direito de divulgar a sua identidade a qualquer terceiro que afirme que qualquer parte do seu Conteúdo do usuário constitui uma violação dos direitos de propriedade intelectual ou do direito à privacidade. Também divulgaremos o seu Conteúdo do usuário a terceiros ou órgãos governamentais onde formos legalmente obrigados a fazê-lo.')}
                </Paragraph>
                <Paragraph>
                    {t('5.9. A licença da Suprema Poker para o seu Conteúdo do Usuário termina quando você solicita a exclusão da sua Conta, enviando um pedido para nós, com as seguintes exceções:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('5.9.1. Conteúdo do usuário enviado em resposta às promoções da Suprema Poker, que estará sujeito a quaisquer Termos de Recursos ou outros termos da promoção;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.9.2. Conteúdo do usuário compartilhado com outros, que eles não tenham excluído ou já usado publicamente conforme permitido por estes Termos;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.9.3. Conteúdo do usuário sujeito a uma licença separada com a Suprema Poker, que estará sujeito aos termos de tal licença;')}
                    </Paragraph>
                    <Paragraph>
                        {t('5.9.4. Exceções previstas na Política de Privacidade.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('5.10. Se você solicitar a exclusão do seu Conteúdo do usuário, tomaremos as medidas cabíveis para remover o seu Conteúdo do usuário do uso ativo, o que pode incluir a supressão do seu Conteúdo do usuário em nossos sistemas. No entanto, o Conteúdo do Usuário pode persistir em nossos sistemas, inclusive em cópias de segurança. Também podemos reter cópias do Conteúdo do usuário, se for exigido por lei.')}
                </Paragraph>
                <Paragraph>
                    {t('5.11. Quando você posta, publica ou transmite suas observações e comentários sobre os Serviços, como em recursos de chat, não podemos garantir que outros jogadores não usarão as ideias e informações que você compartilha. Se você tem uma ideia ou informação que gostaria de manter em sigilo e / ou não deseja que outras pessoas usem, não poste. Suprema Poker não é responsável pelo uso ou apropriação de qualquer outra pessoa de qualquer conteúdo ou informação que você poste, publique ou transmita em quaisquer salas de chat.')}
                </Paragraph>
                <Paragraph>
                    {t('5.12. Não temos nenhuma obrigação de monitorar os Serviços em busca de Conteúdo do Usuário impróprio ou ilegal ou a conduta de outros jogadores, e não assumimos qualquer responsabilidade por tal conduta. Também não somos responsáveis ​​por informações, materiais, produtos ou serviços fornecidos por outros jogadores (por exemplo, em seus perfis) e o Conteúdo do Usuário não é aprovado por nós. Ao usar nossos Serviços, você entende que pode ser exposto a uma conduta que pode considerar ofensiva ou de outra forma questionável. Não endossamos nenhum Conteúdo do Usuário postado nos Serviços e nem garantimos sua veracidade ou precisão.')}
                </Paragraph>
                <Paragraph>
                    {t('5.13. Embora não tenhamos obrigação de monitorar os Serviços, temos o direito, a nosso exclusivo critério, de monitorar, registrar ou armazenar suas interações com os Serviços ou suas comunicações com a Suprema Poker ou outro jogador quando você estiver usando os Serviços (incluindo sem limitar suas comunicações por meio de texto no jogo). Para obter mais informações, consulte nossa Política de Privacidade e Regras da Comunidade.')}
                </Paragraph>
                <Paragraph>
                    {t('5.14. Nós nos reservamos o direito de escolher editar, recusar postar ou remover qualquer Conteúdo do Usuário ou qualquer outro material que considerarmos, a nosso exclusivo critério, como questionáveis. Se determinarmos que suas comunicações ou Conteúdo do Usuário violam estes Termos, Termos de Recursos, Política de Privacidade ou Regras da Comunidade, temos o direito, a nosso critério exclusivo e sem aviso prévio, de desativar sua capacidade de postar Conteúdo do Usuário ou de nos comunicarmos com outros jogadores, ou podemos encerrar totalmente o seu acesso aos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('5.15. Com a finalidade de evitar a retenção de dados que não são mais necessários e / ou para melhorar nossos serviços, podemos excluir ou encerrar contas que estão inativas (ou seja, não conectadas) por 180 dias.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('6. SUAS NEGOCIAÇÕES COM OUTROS JOGADORES')}
                </Markes>
                <Paragraph>
                    {t('6.1. Você é responsável por suas interações com outros jogadores de acordo com as Regras da Comunidade. Se você tiver um problema com outro jogador, não somos obrigados a nos envolver, mas nos reservamos o direito de fazê-lo.')}
                </Paragraph>
                <Paragraph>
                    {t('6.2. Você reconhece que caso tenha uma disputa com outro jogador, você isenta a Suprema Poker de responsabilidades, reclamações, demandas e / ou danos (reais ou indiretos) de todo tipo e natureza, sejam conhecidos ou não, resultantes dessa disputa ou relacionados a essa disputa. Isso inclui danos por lucros cessantes, reputação, uso ou dados.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('7. TERMOS DE PAGAMENTO')}
                </Markes>
                <Paragraph>
                    {t('7.1. Nosso jogo é gratuito para jogar, mas você pode comprar itens virtuais usando dinheiro real para desfrutar de certos recursos do nosso jogo. A compra dos Itens Virtuais pode ser feita fornecendo autorização de faturamento por meio da plataforma de terceiros na qual você está jogando (por exemplo, Apple, Google etc), na modalidade Play Money.')}
                </Paragraph>
                <Paragraph>
                    {t('7.2. Você obterá uma licença limitada e o direito de usar os Itens Virtuais após a conclusão da transação de compra dos Itens Virtuais.')}
                </Paragraph>
                <Paragraph>
                    {t('7.3.Quando você compra Itens Virtuais em outras plataformas, como Apple ou Google, a Suprema Poker não participa da transação e sua compra será regida pelos termos e condições de pagamento da plataforma de terceiros. Reveja os termos de serviço da plataforma para obter informações adicionais. Você também pode entrar em contato com nossa equipe de suporte em')} <Ancora onClick={handleEmailAtend}>atendimento@suprema.group</Ancora> {t(' ou no ícone de atendimento no site')} <Link href='https://supremapoker.net/'><Ancora>supremapoker.net</Ancora></Link> 
                </Paragraph>
                <Paragraph>
                    {t('7.4. Você reconhece que, ao comprar os Itens Virtuais, você não possui os Itens Virtuais, mas apenas adquire uma licença limitada para usar os Itens Virtuais, de acordo com o recurso específico do Jogo. Qualquer saldo de “moeda virtual” mostrado em sua conta não constitui um saldo do mundo real ou reflete qualquer valor armazenado, mas constitui uma medida da extensão de sua licença limitada.')}
                </Paragraph>
                <Paragraph>
                    {t('7.5. Você concorda que as compras para adquirir o direito de usar os Itens Virtuais não são reembolsáveis ​​em toda a extensão permitida por lei. Suprema Poker não é obrigado a fornecer um reembolso por qualquer motivo e você não será reembolsado por Itens Virtuais não utilizados quando uma Conta for encerrada, independentemente do motivo.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('8. PUBLICIDADE')}
                </Markes>
                <Paragraph>
                    {t('8.1. Nossos serviços podem apresentar anúncios nossos ou de outras empresas. Consulte nossa Política de Privacidade sobre as informações que compartilhamos com os anunciantes.')}
                </Paragraph>
                <Paragraph>
                    {t('8.2. Você concorda que temos permissão para fornecer links em nosso Jogo ou nos Serviços a terceiros que podem convidá-lo a participar de uma oferta promocional e / ou oferecer algum recurso dos Serviços ou upgrade em troca. Quaisquer ofertas desse tipo, caso você decida aceitá-las, são de sua exclusiva responsabilidade.')}
                </Paragraph>
                <Paragraph>
                    {t('8.3. Não temos responsabilidade por nenhum site de terceiros vinculado aos nossos Serviços, e tal link não significa que endossamos ou aprovamos esse site vinculado ou qualquer informação que você obtenha dele. Não somos responsáveis ​​por qualquer reclamação relativa a qualquer conteúdo, bens e / ou serviços de terceiros.')}
                </Paragraph>
                <Paragraph>
                    {t('8.4. Você entende que os sites de terceiros vinculados não estão sob nosso controle e podem coletar dados ou solicitar que você forneça informações pessoais ou outras, ou eles podem coletar automaticamente informações suas. Quando você usa esses sites e serviços de terceiros, a empresa terceirizada pode (ou não) solicitar permissão para acessar suas informações e conteúdo. Não somos responsáveis ​​pelo conteúdo, práticas comerciais ou políticas de privacidade dessas outras empresas, ou por como elas coletam, usam ou compartilham as informações que obtêm de você.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('9. ISENÇÃO DE GARANTIA')}
                </Markes>
                <Paragraph>
                    {t('9.1. Devido à natureza da Internet, o Serviço é fornecido “como está” e “conforme disponível”. Nenhuma promessa ou garantia é feita pela Suprema Poker de que os Serviços ou qualquer conteúdo deles estarão sempre disponíveis, ininterruptos ou livres de erros. Nós nos reservamos o direito de suspender, retirar ou restringir a disponibilidade de toda ou parte de nossos Serviços por motivos comerciais e operacionais.')}
                </Paragraph>
                <Paragraph>
                    {t('9.2. Você é o único responsável por todas as suas comunicações e interações com outros usuários do Serviço e com outras pessoas com quem você se comunica ou interage como resultado de seu uso do Serviço. Você entende que a Suprema Poker não faz a triagem ou investiga os antecedentes de qualquer Jogador ou faz qualquer tentativa de verificar as declarações dos Jogadores. Suprema Poker não faz representações ou garantias quanto à conduta dos usuários do Serviço ou sua compatibilidade com quaisquer usuários atuais ou futuros do Serviço. Você concorda em tomar precauções razoáveis ​​em todas as comunicações e interações com outros usuários do Serviço e com outras pessoas com quem você se comunica ou interage como resultado de seu uso do serviço, especialmente se você decidir se encontrar off-line ou pessoalmente.')}
                </Paragraph>
                <Paragraph>
                    {t('9.3. Na medida do permitido pela lei aplicável, Suprema Poker não oferece garantias, condições ou outros termos de qualquer tipo, expressos ou implícitos, sobre os Serviços. A Suprema Poker se isenta de quaisquer garantias de título ou garantias implícitas, condições ou outros termos de não violação, comercialização, prazer tranquilo ou adequação a um propósito específico. Se o seu estado ou país exigir um determinado período para o qual se aplica uma garantia, será o mais curto de 30 dias a partir do primeiro uso dos Serviços ou o menor período exigido por lei.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('10. LIMITAÇÕES E RENÚNCIA DE RESPONSABILIDADE')}
                </Markes>
                <Paragraph>
                    {t('10.1. Você concorda que a Suprema Poker não é responsável:')}
                </Paragraph>
                <Context>
                    <Paragraph>
                        {t('10.1.1. Por quaisquer danos indiretos, incidentais, especiais, exemplares, punitivos ou consequentes, incluindo lucros cessantes, boa vontade, direitos comerciais ou dados, de qualquer forma decorrentes do uso ou incapacidade de uso dos Serviços;')}
                    </Paragraph>
                    <Paragraph>
                        {t('10.1.2. Todos os danos ou lesões causadas ​​pelos Serviços, ou relacionados ao uso ou incapacidade de uso dos Serviços, sob qualquer causa de ação em qualquer jurisdição, incluindo, sem limitação, ações por violação de garantia, violação de contrato, ou ato ilícito (incluindo negligência);')}
                    </Paragraph>
                    <Paragraph>
                        {t('10.1.3. Pela conduta de terceiros, incluindo outros usuários dos Serviços e operadores de sites externos.')}
                    </Paragraph>
                </Context>
                <Paragraph>
                    {t('10.2. O risco de usar os Serviços é inteiramente sua, assim como o risco de lesões causadas pelos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('10.3. Não seremos responsáveis ​​por quaisquer danos além do valor pago aa Suprema Poker. Algumas jurisdições não permitem a exclusão ou limitação de responsabilidade por danos consequentes ou incidentais, portanto, as limitações acima são limitadas à extensão máxima permitida pela lei aplicável em tais países ou jurisdições.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('11. INDENIZAÇÃO')}
                </Markes>
                <Paragraph>
                    {t('11.1. Você concorda em indenizar, salvar e isentar de responsabilidade a Suprema Poker de quaisquer reclamações, perdas, danos, responsabilidades, incluindo taxas e despesas legais, decorrentes do seu uso ou mau uso do Serviço, qualquer violação por você destes termos ou qualquer violação das representações, garantias e convênios feitos por você neste documento. A Suprema Poker reserva-se o direito, às suas custas, de assumir a defesa e controle exclusivos de qualquer assunto pelo qual seja obrigado a indenizar, e você concorda em cooperar com a defesa da Suprema Poker em relação a essas reivindicações. A Suprema Poker envidará todos os esforços razoáveis ​​para notificá-lo de qualquer reclamação, ação ou procedimento ao tomar conhecimento disso. Você concorda que as disposições desta seção de Indenização sobreviverão a qualquer encerramento de sua Conta (se aplicável) ou de seu acesso ou uso do Serviço.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('12. SEPARAÇÃO DE TERMOS')}
                </Markes>
                <Paragraph>
                    {t('12.1. Cada parágrafo destes T&C opera separadamente. Se alguma disposição se tornar inválida ou inexequível, o restante não será afetado, sendo válido e exequível em toda a extensão permitida por lei.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('13. ATRIBUIÇÃO')}
                </Markes>
                <Paragraph>
                    {t('13.1. Podemos atribuir nossos direitos e / ou obrigações a qualquer pessoa ou entidade a qualquer momento com ou sem o seu consentimento. Você não deve ceder seus direitos e / ou obrigações a ninguém sem o consentimento por escrito da Suprema Poker, e qualquer tentativa de fazê-lo sem o nosso consentimento será nula.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('14. AVISOS')}
                </Markes>
                <Paragraph>
                    {t('14.1. Se tivermos que avisar você sobre algo, podemos notificá-lo postando uma mensagem no seu perfil da Suprema Poker App, enviando um e-mail ou usando outras formas de comunicação com base nas informações de contato que você fornecer para nós.')}
                </Paragraph>
                <Paragraph>
                    {t('14.2. Cada notificação, solicitação ou comunicação de você deve ser por escrito e em inglês, e deve ser enviada para ')} <Ancora onClick={handleEmailAtend}>atendimento@suprema.group</Ancora>. 
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('15. SEM RENÚNCIA')}
                </Markes>
                <Paragraph>
                    {t('15.1. Senão fizermos cumprir nossos direitos sob estes T&C e Documentos, isso não renuncia ao nosso direito de fazê-lo posteriormente. E, se renunciarmos expressamente a uma disposição destes T&C e Documentos, isso não significa que seja dispensada para sempre no futuro. Se renunciarmos a uma inadimplência ou violação de sua parte, apenas o faremos por escrito, e isso não significa que renunciaremos automaticamente a qualquer inadimplemento ou violação posterior de sua parte.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('16. FORÇA MAIOR')}
                </Markes>
                <Paragraph>
                    {t('16.1. Não somos responsáveis ​​por quaisquer alterações ou problemas fora do nosso controle, por exemplo, alterações ou problemas causados ​​por desastres naturais, guerra, terrorismo, motins, embargos, atos de autoridades civis ou militares ou governo local, incêndio, inundações, acidentes, infraestrutura de rede falhas, greves ou falta de transporte, instalações, combustível, energia, mão de obra ou materiais.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('17. ALTERAÇÕES A ESTES TERMOS')}
                </Markes>
                <Paragraph>
                    {t('17.1. Nós nos reservamos o direito, a nosso critério, de alterar, modificar, adicionar ou remover partes dos T&C e Documentos a qualquer momento, publicando os T&C e Documentos alterados em nossos sites ou nos Serviços (por exemplo, por meio de avisos no jogo). Podemos fornecer avisos adicionais, como uma mensagem de e-mail ou mensagens dentro dos Serviços, sobre quaisquer alterações materiais. A menos que declaremos o contrário, as alterações entram em vigor quando publicadas. Novas versões dos Termos, Termos em destaque, Política de Privacidade ou Regras da Comunidade e quaisquer outras políticas, códigos ou regras estarão acessíveis nos Serviços. Se continuar a usar os Serviços após a publicação das alterações, você concorda que as alterações se aplicam ao seu uso continuado dos Serviços.')}
                </Paragraph>
                <Paragraph>
                    {t('17.2. Você não tem permissão para fazer alterações nos T&C e nos documentos.')}
                </Paragraph>
            </Content>
            <Content>
                <Markes>
                    {t('18. LEI APLICÁVEL E JURISDIÇÃO')}
                </Markes>
                <Paragraph>
                    {t('18.1. Estes T&C e Documentos, bem como os Serviços são regidos pelas leis do Brasil.')}
                </Paragraph>
                <Paragraph>
                    {t('18.2. Os Termos e Condições da Suprema, bem como demais Políticas, Manuais, Regras dos Jogos, Regras de Jogo Limpo, Jackpot, promoções, bonificação e demais comunicados integram o presente T&C e estarão disponíveis nos canais oficiais. Por isso, ao dar aceite neste T&C, você está ciente de que deverá consultar o site oficial da Suprema e estará sujeito às referidas regras')} <Link href={'https://supremapoker.com.br/'}><Ancora>(supremapoker.com.br)
                        </Ancora></Link> {t('e todas as Regras publicadas no Aplicativo Suprema Poker.')}
                </Paragraph>
            </Content>
        </Container>
    )
}

export default withNamespaces()(TermsAndConditions)

