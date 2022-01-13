import React from 'react';
import Link from "next/link";

const PostList = ({products}) => {
    return (
        <div>
            <h1>List of Posts</h1>
            {
                products.map(el => {
                    return (
                        <div key={el.id}>
                            <Link href={`/products/${el.id}`} passHref>
                                <h2>
                                    {el.id} {el.title}
                                </h2>
                            </Link>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:4000/products/');
    const data = await response.json();

    return {
        props: {
            products: data
        }
    }
}

export default PostList;