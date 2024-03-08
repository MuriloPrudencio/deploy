import { React, useState, useEffect }from "react"
import { Container, Content, Title, Span, Paragraph, ContainerCards, ContainerButtom, Buttom } from "./styled"
import BlogCards from "./BlogCards";
import Link from "next/link";
import { withNamespaces } from 'react-i18next';

function Blog ({t}) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`https://api.pokerbyte.com.br/blog/list`)
        .then((resp) => resp.json())
        .then((data) => {
            setBlogs(data.data)
        });
    }, []);

    return (
        <Container>
            <Content>
                <Title>{t('fique por dentro do')}</Title>
                <Span>{t('mundo do poker')}</Span>
                <ContainerCards>
                    {blogs.map((blogs, index) => (
                        index < 3 && (
                            <BlogCards key={index} blog={blogs} />
                        )
                    ))}
                </ContainerCards>
                <ContainerButtom>
                    <Link href="blog">
                        <Buttom>
                            {t('ler mais artigos')}
                        </Buttom>
                    </Link>
                </ContainerButtom>
            </Content>
        </Container>
    )
}

export default withNamespaces()(Blog)