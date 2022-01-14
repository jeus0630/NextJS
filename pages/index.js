import React from 'react';
import Image from "next/image";
import img from "../public/vercel.svg";
const MyComponent = () => {
    return (
        <div>
            <h1>Index</h1>
            <div>
                <Image src={img} placeholder='blur' blurDataURL={img} alt="s"/>
            </div>
        </div>
    );
};

export default MyComponent;
