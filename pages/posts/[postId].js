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
        fallback : 'blocking'
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