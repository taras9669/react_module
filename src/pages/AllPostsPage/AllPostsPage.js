import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import css from "../../pages/AllPostsPage/AllPostsPage.module.css";
import PostById from "../../components/PostById/PostById";

const AllPostsPage = () => {
        const {id} = useParams();
        const [postsById, setPostsById] = useState([]);


        useEffect(()=> {
            userService.getPostsById(id).then(value => setPostsById([...value]))
        },[id])


        return (
            <div className={css.posts}>
                {postsById.map(post => <PostById key={post.id} post={post}/>)}
            </div>
    );
};

export default AllPostsPage;