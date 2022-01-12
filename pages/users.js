import React from 'react';
import User from "../components/user";
const Users = ({users}) => {
    return (
        <>
            <h1>users</h1>
            {
                users.map(el => {
                    return (
                        <div key={el.id}>
                            <User user={el}></User>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Users;

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    };
}