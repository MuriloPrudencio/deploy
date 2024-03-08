import React from "react";
import styled from "styled-components";
import CookieBanner from "../../../components/Cookies/CookieBanner";

const Container = styled.div`
    height: calc(100% - 100px);
`;

const Content = styled.div`
    max-width: 100%;
`;
const Iframe = styled.iframe`
    width: 100%;
    height: calc(5490px - 100px);
    position: relative;
    overflow-y: hidden;
    border: none;
`;

export default function Onboard () {
    return (
        <Container>
            <Content>
                <Iframe width="100%" height="100%"  frameborder="0" scrolling="no" src="https://aniversario.supremapoker.com.br"/>
            </Content>
            <CookieBanner />
        </Container>
    )
};