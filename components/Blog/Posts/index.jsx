import React from "react";
import { Atualizacao, Background, Container, Content, SubTitle, Title, ContentBlog, TitlePost, Autor} from "./styled";
import moment from 'moment';

export default function Post ({posts}) {

    return (
        <Container>
            <Background imageUrl={`/${posts.bannerBlog}`}>
                <Content>
                    <Atualizacao>
                      Publicado em {moment(posts.date_publishBlog).format('MM/YY')} {''} 
                      por <Autor>{posts.autor}</Autor> 
                    </Atualizacao>
                    <Title>
                        {posts.titleBlog}
                    </Title>
                    <SubTitle>
                        {posts.subtitleBlog}
                    </SubTitle>
                </Content>
            </Background>
            <ContentBlog dangerouslySetInnerHTML={{ __html: posts.contentBlog }}/>
        </Container>
    )
}