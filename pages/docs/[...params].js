import React from 'react';
import {useRouter} from "next/router";

const Doc = () => {

    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>Docs Home Page</h1>
        </div>
    );
};

export default Doc;
