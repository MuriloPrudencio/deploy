import React from "react";
import styled from "styled-components";
import CookieBanner from "../../../components/Cookies/CookieBanner";

const Container = styled.div`
    height: calc(100% - 100px);
`;

const Content = styled.div`
    max-width: 85%;
    @media(min-width: 1890px) {
        max-width: 1800px;
    }

    @media(max-width: 650px) {
        max-width: 100%;
    }
`;

const Iframe = styled.iframe`
    width: 100%;
    height: calc(1170px - 100px);
    position: relative;
    overflow-y: hidden;
    border-radius: 40px;
    margin: 2em 0em;
    border: none;
`;

export default function Ranking () {
    return (
        <Container>
            <Content>
                <Iframe width="100%" height="100%"  frameborder="0" scrolling="no" src="https://pokerbyte.com.br/report/rankingSeriesKOSS"/>
            </Content>
            <CookieBanner />
        </Container>
    )
};