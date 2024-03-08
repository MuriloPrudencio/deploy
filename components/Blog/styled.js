import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(/images/bg-blog.png) ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-size:  cover;
    overflow:hidden;
    padding-top: 10%;
`;

export const Content = styled.div`
    max-width: 88%;
    margin: 5em 0em;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: 'REM', sans-serif;
    text-transform: uppercase;

    @media(max-width: 578px) {
        font-size: 22px;
    }

`;

export const Span = styled.span`
    color: #EFA144;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

    @media(max-width: 578px) {
        font-size: 22px;
    }
`;

export const Paragraph =  styled.p`
    width: 472px;
    margin-top: .8em;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media(max-width: 578px) {
        width: 330px;
        font-size: 12px;
    }
`;

export const ContainerCards = styled.div`
    margin: 2em 0em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    @media(max-width: 1433px) {
        justify-content: center;
        gap: 2em;
    }
`;

export const ContainerButtom = styled.div`
    margin: 2em 0em 6em 0em;
`;

export const Buttom = styled.a`
    background-color: #EFA144;
    padding: .5em;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;

    &:hover{
        background-color: #ca8734;
    }
`;