import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: #2C2C2C;
    height: 100%;
`;

export const Content = styled.div`
    max-width: 85%;
    display: flex;
    border-bottom: 1px solid #FFF;
    justify-content: space-between;
    overflow: hidden;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }

    @media(max-width: 1332px) {
        flex-direction: column;
    }

    @media(max-width: 998px) {
        max-width: 100%;
        margin: 0em 1em;
    }
`;

export const Nav = styled.div`
    padding: 4em 0em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;

    @media(max-width: 1332px) {
        width: 100%;
    }

    @media(max-width: 410px) {
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        gap: 1em;
    }
`;

export const Navigator= styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Explication = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Policy = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Networks = styled.div`
    padding: 4em 0em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;

    @media(max-width: 1332px) {
        width: 100%;
        flex-direction: row;
    }

    @media(max-width: 998px) {
        width: 100%;
        flex-direction: column;
        margin: 0 auto;
        gap: 1em;
    }
`;

export const Ancora = styled.a`
    color: #fff;
    text-align: start;
    text-transform: uppercase;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    cursor: pointer;

    &:hover {
        color: #dfdfdf;
    }
`;

export const SubTitle = styled.h3`
    text-align: start;
    text-transform: uppercase;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media(max-width: 482px) {
        text-align: center;
        font-size: 13.5px;
    }
`;

export const ContainerMidias = styled.div`
    @media(max-width: 998px) {
        margin: auto;
        width: 55%;
    }

    @media(max-width: 488px) {
        margin: auto;
        width: 55%;
    }

`;

export const Midias = styled.div`
    display: flex;
    gap: 2%;
`;

export const Img = styled.img`
    margin-top: .5em;   
    width: 50px;
    height: 49px;
    cursor: pointer;

    @media(max-width: 650px) {
        width: 35px;
        height: 34px;
    }

    @media(max-width: 454px) {
        width: 30px;
        height: 29px;
    }
`;

export const Download = styled.div`
@media(max-width: 998px) {
    margin: auto;
    width: 55%;
}
`;

export const App = styled.div`
    display: flex;

    @media(max-width: 482px){
        flex-direction: column;
        align-items: center;
    }
`;

export const AppImg = styled.img`
    margin-top: .5em;
    width: 155px;
    height: 51px;
    cursor: pointer;

    @media(max-width: 650px) {
        width: 110px;
        height: 37px;
    }
`;

export const ButtonAPK = styled.a``;

export const Paragraph = styled.p`
    color: #000;
    padding: 0.2em;
`

export const Button = styled.button`
    position: relative;
    float: right;
    top: 2.6em;
    padding: 0.2em 1em;
    border: none;
    border-radius: 9px;
    background: #000;
    color: #fff;
    text-transform: uppercase;
`;