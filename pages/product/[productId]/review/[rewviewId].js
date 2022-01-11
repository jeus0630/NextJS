import React from 'react';
import {useRouter} from "next/router";

const Review = () => {
    const router = useRouter();
    const productId = router.query.productId;
    const reviewId = router.query.rewviewId;
    return (
        <div>
            <div>{productId}</div>
            <div>{reviewId}</div>
        </div>
    );
};

export default Review;
