import React, {useEffect, useState,} from 'react';

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from './PostsPage.module.css'
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect( ()=> {
        postService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div className={css.posts}>
            <div>
                <h1>POSTS</h1>
                {posts.map(post=> <Post key={post.id} post={post}/> )}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;