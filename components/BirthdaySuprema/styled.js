import styled from "styled-components";

export const Container = styled.div`
    background-image: url(/images/bg-birthday.png) ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-size:  cover;
    width: 100%;
    height: 943px;
    overflow:hidden;
    display: flex;
    justify-content: space-evenly;

    @media(max-width: 1151px) {
        height: 723px;
    }
`;

export const Content = styled.div`
    width: 88%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }

    @media(max-width: 941px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-around
    }

`;

export const Img = styled.img``;