import styled from "styled-components"


export const Card = styled.div`
    background-image: url(/images/table.png) ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-size:  cover;
    width: 500px;
    height: 300px;

    @media(max-width: 671px) {
        width: 350px;
        height: 215px;
    }
`;

export const Buyin = styled.p`
    position: relative;
    right: 15.7em;
    bottom: 6.5em;
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    font-family: 'REM', sans-serif;

    @media(max-width: 672px) {
        right: 10.85em;
        bottom: 5.8em;
    
    }
`;

export const Start = styled.p`
    position: relative;
    left: 4.5em;
    bottom: 0.8em;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px) {
        bottom: 0.8em;
        font-size: 12px;
    }
`;


export  const SpanBuyin = styled.span`
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 35px;
    position: relative;
    bottom: 2.4em;
    right: 5.4em;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px) {
        bottom: 2.5em;
        right: 4.4em;
        font-size: 30px;
    }
`;

export const Stack = styled.p`
    position: relative;
    bottom: 13.3em;
    right: 15.7em;
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px) {
        bottom: 12.5em;
        right: 10.95em;
    }
`;

export const Blind = styled.p`
    position: relative;
    bottom: 1.7em;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px){
        bottom: 3.5em;
        font-size: 15px;
    }
`;

export const Late = styled.p`
    position: relative;
    left: 15.3em;
    bottom: 1.5em;
    color: #000;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px) {
        left: 11.1em;
        bottom: 1.4em;
    }
`;

export const SpanLate = styled.span`
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 35px;
    position: relative;
    left: 5.4em;
    bottom: 0.7em;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px) {
        font-size: 30px;
        left: 4.4em;
    }
`;

export const Tournament = styled.p`
    position: relative;
    top: 0.5em;
    right: 2em;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 13ch;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px){
        font-size: 10px;
    }
`;

export const Guaranteed = styled.p`
    font-size: 80px;
    font-weight: 800;
    position: relative;
    top: .8em;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px) {
        font-size: 55px;
        font-weight: 800;
        position: relative;
        top: 0.8em;
    }
`;

export const Modalidade = styled.p`
    font-size: 40px;
    font-weight: bold;
    position: relative;
    bottom: 1em;
    text-transform: uppercase;
    font-style: italic;
    font-family: 'REM', sans-serif;

    @media(max-width: 671px){
        bottom: 1.5em;
    }
`;



