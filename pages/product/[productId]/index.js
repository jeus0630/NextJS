import React from 'react';
import {useRouter} from "next/router";

const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h1>Access to {productId}</h1>
            <h2>Hello World</h2>
        </div>
    );
};

export default ProductDetail;