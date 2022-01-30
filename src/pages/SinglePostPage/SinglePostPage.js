import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import css from './SinglePostPage.module.css'

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();

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
                    <button onClick={() => {
                        navigate(`comments`)
                        state={post}
                    }}>Comments of post</button>
                    <div><Outlet/></div>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;