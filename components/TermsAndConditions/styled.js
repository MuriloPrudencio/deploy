import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    margin: 5em 0em;

    @media(max-width: 660px) {
        margin: 2em 0em;
    }
`;


export const Content = styled.div``;


export const Title = styled.h1`
    padding: 1em;
    color: #EFA144;

    @media(max-width: 1138px) {
        font-size: 23px;
    }

    @media(max-width: 821px) {
        font-size: 19px;
    }

    @media(max-width: 661px) {
        font-size: 15px;
    }

    @media(max-width: 525px) {
        font-size: 12px;
    }
`;

export const SubTitle = styled.h2`
    padding: 2em 0em;
    color: #EFA144;
    text-align: justify;

    @media(max-width: 1138px) {
        font-size: 21px;
    }

    @media(max-width: 821px) {
        font-size: 18px;
    }

    @media(max-width: 661px) {
        font-size: 14px;
    }

    @media(max-width: 525px) {
        font-size: 12px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    text-align: justify;
    padding: 0.35em;

    @media(max-width: 600px) {
        font-size: 11px;
    }
`;

export const Span = styled.span`
    font-weight: bold;
    color: #EFA144;
`;

export const Markes = styled.h3`
    color: #EFA144;
    text-align: justify;
    padding: 1em 2em;

    @media(max-width: 600px) {
        font-size: 13px;
    }
`;

export const Context = styled.div`
    padding-left: 10%;
`;

export const Ancora = styled.a`
    color: #EFA144;
`;

export const Italic = styled.p`
    font-style: italic;
    font-size: 18px;
    text-align: center;
    padding: 0.35em;

    @media(max-width: 660px) {
        font-size: 11px;
    }
`;

export const Article = styled.p``;