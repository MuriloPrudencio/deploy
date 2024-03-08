import styled from "styled-components";

export const Container = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media(max-width: 939px) {
        text-align: center;
    }

`;

export const Logo = styled.img`
    width: 380px;

    @media(max-width: 1627px) {
        width: 270px
    }

    @media(max-width: 1281px) {
        width: 215px
    }

    @media(max-width: 1163px) {
        width: 170px
    }

    @media(max-width: 939px) {
        margin: auto;
    }
`;

export const Content = styled.div`
    width: 756px;

    @media(max-width: 1711px) {
        width: 665px;
        text-align: left;
    }

    @media(max-width: 1627px) {
        width: 493px;
    }

    @media(max-width: 1627px) {
        width: 395px;
    }

    @media(max-width: 1095px) {
        width: 313px;
    }
`;

export const Title = styled.h1`
    font-size: 45px;
    font-family: Montserrat;
    text-transform: uppercase;

    @media(max-width: 1775px) {
        font-size: 40px;
    }

    @media(max-width: 1631px) {
        font-size: 30px;
    }

    @media(max-width: 1281px) {
        font-size: 24px;
    }

    @media(max-width: 1163px){
        font-size: 19px;
    }
`;

export const Paragraph = styled.p`
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    width: 75%;

    @media(max-width: 1775px) {
        font-size: 28px;
    }

    @media(max-width: 1631px) {
        font-size: 20px;
    }

    @media(max-width: 1281px) {
        font-size: 16px;
    }

    @media(max-width: 1163px){
        font-size: 13px;
    }
`;

export const Span = styled.span`
    color: #EFA144;
`;

export const Button = styled.a`
    border-radius: 5px;
    background: #EFA144;
    color: #000;
    font-family: REM;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    padding: 0.5em 2em;
    width: 13em;

    @media(max-width: 939px) {
        margin: auto;
    }
`;