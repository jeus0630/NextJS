import React from 'react';
import {useRouter} from "next/router";

const Post = ({post}) => {

    const router = useRouter();

    if(router.isFallback){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // const paths = data.map(el=>({
    //     params : {postId : `${el.id}`}
    // }))

    return {
        paths : [
            {
                params : {postId : 1}
            },
            {
                params : {postId : 2}
            },
            {
                params : {postId : 3}
            }
        ],
        fallback : true
    }
}

export const getStaticProps = async (context) => {
    console.log(context);
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    if(!data.id){
        return {
            notFound : true
        }
    }

    return {
        props : {
            post : data.slice(0,3)
        }
    }
}

export default Post;