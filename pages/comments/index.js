import React from 'react';
import {useState} from "react";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);

    const fetchComments = async() => {
        const response = await fetch('/api/comments');
        const data = await response.json();

        setComments(data);
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments',{
            method : 'POST',
            body : JSON.stringify({comment}),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
    }

    const deletecomment = async (id) =>{
        const response = await fetch(`/api/comments/${id}`,{
            method : 'DELETE'
        })
        const data = await response.json();
        console.log(data);
        fetchComments();
    }

    return (
        <div>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
            <button onClick={submitComment}>Submit comment</button>
            <button onClick={fetchComments}>Load comments</button>

            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.id} {comment.text}

                            <button onClick={()=>deletecomment(comment.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CommentsPage;
