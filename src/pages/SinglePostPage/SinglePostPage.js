import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import css from './SinglePostPage.module.css'

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(()=> {
        if (state){
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    },[state, id])
    return (
        <div>
            {post && (
                <div className={css.post}>
                    <div className={css.postDiv}>USERID: {post.userId}</div>
                    <div className={css.postDiv}>ID: {post.id}</div>
                    <div className={css.postDiv}>TITLE: {post.title}</div>
                    <div className={css.postDiv}>BODY: {post.body}</div>
                    <button>Post Details</button>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;