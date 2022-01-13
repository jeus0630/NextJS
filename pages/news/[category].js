import React from 'react';
import {useRouter} from "next/router";

const Cateogry = ({articles, category}) => {
    const router = useRouter();
    const {query} = router;

    console.log(query);
    return (
        <div>
            <h1>Showing news for category <i>{category}</i></h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p>
                                {article.description}
                            </p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const {params, req, res, query} = context;

    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie',['name=Jewoo']);


    const {category} = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    return {
        props : {
            articles : data,
            category
        }
    }
}

export default Cateogry;
