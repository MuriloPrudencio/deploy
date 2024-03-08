import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;  
    min-width: 100%;
    padding-left: .8em;
    cursor: pointer;

    @media(max-width: 650px) {
        padding-left: 0em;
    }
`;

export const Content = styled.div`
    flex: 1;
`;

export const Presentation = styled.div`
    position: fixed;
    width: 350px;
    margin: 2.5em;
    display: flex;
    flex-direction: column;
    gap: 0.35em;
    bottom: 7.5%;

    @media (max-width: 700px){
        width: 250px;
        bottom: 1.5%;
    }
`;

export const Title = styled.h2`
    font-size: clamp(.5rem, .8em, 1.5em);
    text-transform: uppercase;
    text-align: justify;
    color: #EFA144;

    @media (max-width: 685px){
        font-size: 10px;
        display: none;
    }

`;

export const Paragraph = styled.p`
    font-size: clamp(11px, 14px, 1em);
    text-align: justify;
    margin-bottom: 1.8em;

    @media (max-width: 685px){
        font-size: 10px;
        display: none;
    }
`;