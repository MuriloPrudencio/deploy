import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: #2C2C2C;
    height: 100%;
`;

export const Content = styled.div`
    max-width: 85%;
    display: flex;
    justify-content: space-between;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }

    @media(max-width: 1105px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const Paragraph = styled.p`
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
`;

export const Section = styled.div`
    padding: 1.5em 0em;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 1105px) {
        width: 100%;
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Img = styled.img`
    height: 28px;
`;