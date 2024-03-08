import { React } from 'react';
import { Content, Img, Title, Paragraph, Ancora, Arrow, ContainerImg } from './styled';
import Link from 'next/link';

export default function BlogCards ({blog}) {
    return (
        <Content>
            <ContainerImg>
                <Img  src={blog.thumbnailBlog.startsWith('https://') ? blog.thumbnailBlog : `/${blog.thumbnailBlog}`}/>   
            </ContainerImg>
            <Title>{blog.titleBlog}</Title>
            <Paragraph>{blog.subtitleBlog}</Paragraph>
            <Link  href={`/blog/posts/${blog.idBlog}`}>
                <Ancora>
                    LER MAIS
                    <Arrow src='/images/icons/Arrow.png'/>
                </Ancora>
            </Link>
        </Content>
    )

}