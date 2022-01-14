import Head from "next/head";
import React from 'react';

const About = () => {
    return (
        <>
            <Head>
                <title>About Title</title>
                <meta name='description' content='free tutorial on web development'/>
            </Head>
            <div>
                <h1 className={"content"}>About</h1>
            </div>
        </>
    );
};

export default About;