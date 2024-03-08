import {React } from "react";
import { Container, Content } from "./styled";
import Slideshow from "./Slide";
import Presentation from "./Presentation";

export default function Birthday () {
    
    return (
        <Container>
            <Content>
                <Presentation/>
                <Slideshow/>
            </Content>
        </Container>
    )
}