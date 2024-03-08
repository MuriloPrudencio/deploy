import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 2.5em 0em;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }
`;

export const Title = styled.h2`
    margin: .5em 0em;
    color: #EFA144;
    text-align: center;
    font-family: 'REM', sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media(max-width: 476px) {
        font-size: 25px;
    }
`;

export const Paragraph = styled.p`
    width: 473px;
    color: var(--black, #000);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media(max-width: 476px) {
        font-size: 11px;
        width: 350px;
    }
`;

export const ContainerLink = styled.div`
    width: 80%;
    margin: 2em 0em;
`;
