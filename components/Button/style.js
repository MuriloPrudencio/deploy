import styled from 'styled-components';

export const Button = styled.a`
    border: none;
    border-radius: 5px;
    color: #000;
    text-decoration: none;
    padding: 15px;
    background-color: #EFA144;
    white-space: nowrap;
    font-weight: bold;
    margin-right: 7em;

    @media(max-width: 900px) {
        font-size: 10px;
        padding: 10px;
        width: 130px;
    }

    @media(max-width: 500px) {
        font-size: 7px;
        padding: 10px;
        width: 100px;
    }
`;
