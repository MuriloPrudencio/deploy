
import React from "react";
import { withNamespaces } from 'react-i18next';
import { MainContainer, TitlePrincContainer, SectionMainContainer, StyledTable, SectionExampleContainer, CardsSectionContainer, CardsContent, CardsTitle, Imagem, CardsPTwo, DescriptionTitle, Container, Content, Title } from "./style";
import CookieBanner from "../Cookies/CookieBanner";

function JackPot ({t}) {
    return (
        <Container>
            <Content>
                <MainContainer>
                    <TitlePrincContainer>
                    <Title>{t(`REGRAS JACKPOT SUPREMA`)}</Title>
                    <DescriptionTitle>
                       {t("O pote deve ser igual ou maior que 20bb's. 4 jogadores devem estar de acordo com pré-flop. No caso de acordo na mão, somente a primeira contará.")}
                    </DescriptionTitle>
                    </TitlePrincContainer>

                    <SectionMainContainer>
                    <StyledTable>
                        <thead>
                        <tr>
                            <th>{t('Stakes')}</th>
                            <th>{t('Blinds')}</th>
                            <th>{t('Rake')}</th>
                            <th>{t('PAYOUT (Perdedor/Ganhador/Compartilhado/Total)')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td rowSpan="2">{t('Micro')}</td>
                            <td className="td">0,05/0,1 até 0.25/0,5</td>
                            <td className="td">1 bb</td>
                            <td className="td">5% / 2.5% / 2.5% / 10%</td>
                        </tr>
                        <tr>
                            <td className="td">0,5/ 1 até 2,5/5</td>
                            <td className="td">0.5 bb</td>
                            <td className="td">10% / 5% / 5% / 20%</td>
                        </tr>
                        <tr>
                            <td>{t('Medium')}</td>
                            <td className="td">5/10 até 10/20</td>
                            <td className="td">0.5 bb</td>
                            <td className="td">17.5% / 8.75% / 8.75% / 35%</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">{t('High')}</td>
                            <td className="td">15/30 até 25/ 50</td>
                            <td className="td">0.3 bb</td>
                            <td className="td">25% / 12.5% / 12.5% / 12.5% / 50%</td>
                        </tr>
                        <tr>
                            <td className="td">50/100 até 75/150</td>
                            <td className="td">0.2 bb</td>
                            <td className="td">32.5% / 16.25% / 16.25% / 65%</td>
                        </tr>
                        <tr>
                            <td>{t('Extreme')}</td>
                            <td className="td">125/250 ou mais</td>
                            <td className="td">0.1 bb</td>
                            <td className="td">40% / 20% / 20% / 80%</td>
                        </tr>
                        </tbody>
                    </StyledTable>
                    </SectionMainContainer>

                    <SectionExampleContainer>   
                    <p>
                        {t('Jogadores perdedores devem ter uma mão mínima para qualificação. Ambos os jogadores devem usar duas cartas da mão.')}
                    </p>
                    <p>
                        {t('Se mais de um jogador perder com uma mão qualificada para o prêmio Cooler Jackpot, o prêmio será dividido proporcionalmente.')}
                    </p>
                    </SectionExampleContainer>

                    <CardsSectionContainer>
                        <CardsContent>
                        <CardsTitle>
                            <p>NLH</p>
                        </CardsTitle>
                        <div className="cards-img">
                            <div className="crads-p">
                            <p>{t('Mínimo para Qualificação')}</p>
                            </div>
                            <div>
                            <Imagem src="/images/cards/opoker_nlh_A.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh2_A.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh3_A.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh_10.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh2_10.png" alt="" />
                            </div>
                            <CardsPTwo>
                            <p>{t('As mãos classificatórias mínimas devem ser vencidas por Quadra ou mão maior')}</p>
                            <p>{t('Qualificação mínima: - Derrotado de ter Full House de Ases com Dez ou melhor')}</p>
                            <p>{t('(As cartas devem consistir em pelo menos um Ás na mão)')}</p>
                            </CardsPTwo>
                        </div>
                        </CardsContent>

                        <CardsContent>
                        <CardsTitle>
                            <p>PLO4</p>
                        </CardsTitle>
                        <div className="cards-img">
                            <div className="crads-p">
                            <p>{t('Mínimo para Qualificação')}</p>
                            </div>
                            <div>
                            <Imagem src="/images/cards/opoker_plo_10.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo2_10.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh_10.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh2_10.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo_2.png" alt="" />
                            </div>
                            <CardsPTwo>
                            <p>{t('Qualificação mínima: - Quadra de Dez ou melhor')}</p>
                            <p>{t('(Quadras devem consistir em um par na mão)')}</p>
                            </CardsPTwo>
                        </div>
                        </CardsContent>

                        <CardsContent>
                        <CardsTitle>
                            <p>PLO5</p>
                        </CardsTitle>
                        <div className="cards-img">
                            <div className="crads-p">
                            <p>{t('Mínimo para Qualificação')}</p>
                            </div>
                            <div>
                            <Imagem src="/images/cards/opoker_nlh_A.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh2_A.png" alt="" />
                            <Imagem src="/images/cards/opoker_nlh3_A.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo4_A.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo5_2.png" alt="" />
                            </div>
                            <CardsPTwo>
                            <p>{t('Qualificação mínima: - Quadra de Ases ou melhor')}</p>
                            <p>{t('(Quadras devem consistir em um par na mão)')}</p>
                            </CardsPTwo>
                        </div>
                        </CardsContent>

                        <CardsContent>
                        <CardsTitle>
                            <p>PLO6</p>
                        </CardsTitle>
                        <div className="cards-img">
                            <div className="crads-p">
                            <p>{t('Mínimo para Qualificação')}</p>
                            </div>
                            <div>
                            <Imagem src="/images/cards/opoker_plo6_2_9.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo6_3_8.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo6_4_7.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo6_5_6.png" alt="" />
                            <Imagem src="/images/cards/opoker_plo6_6_5.png" alt="" />
                            </div>
                            <CardsPTwo>
                            <p>{t('Qualificação mínima: - Nove High Straight Flush ou melhor derrotado')}</p>
                            </CardsPTwo>
                        </div>
                        </CardsContent>

                    </CardsSectionContainer>
                </MainContainer>
                
            </Content>
            <CookieBanner />
        </Container>
    )
};

export default withNamespaces()(JackPot)