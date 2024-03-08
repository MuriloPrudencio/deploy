import { React, useState, useEffect }from "react"
import BlogCards from "../../../components/Blog/BlogCards";
import styled from "styled-components";
import CookieBanner from "../../../components/Cookies/CookieBanner";
import Head from "next/head";

const Container = styled.div`
    margin: 3em 1em;
    max-width: 85%;

    @media(min-width: 1890px) {
        max-width: 1800px;
    }
`;

const ContainerCards = styled.div`
    margin: 2em 0em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: 1433px) {
        justify-content: center;
        gap: 2em;
    }
`;


export default function Blog () {
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
            <Head>
                <title>Blog</title>
            </Head>
            <ContainerCards>
                {blogs.map((blog) => (
                    <BlogCards key={blog.id} blog={blog} />
                ))}
            </ContainerCards>
            <CookieBanner />
        </Container>

    )
};