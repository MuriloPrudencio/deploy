import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 325px;

    @media(min-width:1800px) {
        max-width: 1800px;
    }

    @media(max-width: 867px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 7em;
    }
`;

export const Content = styled.div`
    text-align: left;
    margin-left: 3%;
    display: flex;
    flex-direction: column;
    gap:.2em;

    @media(max-width: 560px) {
        gap:.38em;
        margin-bottom: 1em;
    }
`;

export const Title = styled.h2`
    width: 417.333px;
    font-family: 'REM', sans-serif;
    margin-top: -0.8rem;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1em;
    text-transform: uppercase;

    @media(max-width: 1377px){
        width: 350px;
        font-size: 35px;
    }

    @media(max-width: 1117px){
        width: 300px;
        font-size: 28px;
    }

    @media(max-width: 812px){
        width: 250px;
        font-size: 23px;
    }

    @media(max-width: 723px){
        width: 400px;
    }

    @media(max-width: 425px) {
        font-size: 15px;
        text-align: center;
    }

    @media(max-width: 376px) {
        width: 332px;
    }
`;

export const Span = styled.span`
    color: #EFA144;
`;

export const Paragraph = styled.p`
    text-align: left;
    width: 180px;
    font-size: 18px;

    @media(min-width: 1800px) {
        width: 260px;
        font-size: 26px;
    }

    @media(max-width: 723px){
        width: 400px;
    }

    @media(max-width: 425px) {
        font-size: 12px;
        text-align: center;
    }

    @media(max-width: 376px) {
        width: 330px;
    }
`;

export const Figure = styled.div`
    width: 703px;

    @media(min-width: 1800px) {
        width: 800px;
        margin-top: -6em;
    }

    @media(max-width: 1377px){
        width: 550px;
    }

    @media(max-width: 1117px){
        width: 355px;
    }
`;

export const Img = styled.img`
    width: 100%;
    position: relative;
    bottom: 20%;

    @media(max-width: 750px) {
        width: 80%;
        position: relative;
        bottom: 0%;
    }
`;

