import React from 'react';

const Post = ({post}) => {

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

    const paths = data.map(el=>({
        params : {postId : `${el.id}`}
    }))

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) => {
    console.log(context);
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return {
        props : {
            post : data
        }
    }
}

export default Post;