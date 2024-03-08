import { React, useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Post from "../../../../components/Blog/Posts";
import Blog from "../../../../components/Blog";


export default function Posts () {
    const router = useRouter();
    const param = router.query.id;
    
    const [post, setPosts] = useState([]);
    
    useEffect(() => {
        if (router.query.id !== undefined) {
            const postData = async () => {
                try {
                  const response = await fetch(`https://api.pokerbyte.com.br/blog/${param}`);
                  const data = await response.json();
                  setPosts(data.data);
                } catch (error) {
                  console.error('Erro ao buscar dados:', error);
                }
            };
            postData()
        }
        
    }, [param]);

    return(
        <>
        {
            post.map((posts, index) => (
                <Post key={index} posts={posts}/>
            ))
        }
        <Blog/>
        </>
    )
}