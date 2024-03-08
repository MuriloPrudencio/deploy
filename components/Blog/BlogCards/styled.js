import styled from "styled-components";

export const Content = styled.div`
    width: 370px;
    height: 385px;
    padding: .5em;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 2em 0em;

`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const Title = styled.h3`
    color: #000;
    font-family: 'REM', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    padding: .5em 0em;
`;

export const Paragraph = styled.p`
    color: #000;
    max-width: 50ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'REM', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Ancora = styled.a`
    color: #000;
    font-weight: bold;
    position: relative;
    right: 8.5em;
    top: 3em;
`;

export const Arrow = styled.img`
    position: absolute;
    left: 6em;
    bottom: 0.03em;
`;

export const ContainerImg = styled.div`
    width: 354px;
    height: 191px;
`;