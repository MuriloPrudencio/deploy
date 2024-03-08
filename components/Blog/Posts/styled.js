import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
`;

export const Background = styled.div`
    width: 100%;
    height: 575px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply; 
    background-position: center center;
    background-repeat:  no-repeat;
    background-size:  cover;
    overflow:hidden;
    padding-top: 5%;

    @media(max-width: 1024px) {
        padding-top: 10%;
    }

    @media(max-width: 796px) {
        padding-top: 15%;
        height: 405px;
    }
`;

export const Content = styled.div`
    width: 65%;
    text-align: left;
    height: 100%;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }

    @media(max-width: 796px) {
        width: 90%;
    }
`;

export const Atualizacao = styled.p`
    font-family: REM;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1em;
`;

export const Title = styled.h1`
    font-family: REM;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
    margin-bottom: .5em;

    @media(max-width: 1024px) {
        width: 80%;
        font-size: 40px;
    }

    @media(max-width: 796px) {
        width: 90%;
    }

    @media(max-width: 796px) {
        width: 100%;
        font-size: 25px;
    }
`;

export const SubTitle = styled.h3`
    font-family: REM;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;

    @media(max-width: 1024px) {
        width: 70%;
        font-size: 30px;
    }

    @media(max-width: 796px) {
        width: 80%;
    }

    @media(max-width: 796px) {
        width: 100%;
        font-size: 18px;
    }
`;

export const TitlePost = styled.h1`
    color: #000;
    width: 85%;
    margin-top: 2em; 
    text-align: justify;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }
`;

export const Autor = styled.span`
    font-style: italic;
`;

export const ContentBlog = styled.div`
    padding: 2em 0em;
    height: 100%;
    width: 65%;
    text-align: justify;
    font-family: REM;
    color: #000;


    @media(min-width: 1890px) {
        max-width: 1800px;
    }
`;

