import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import css from "../../pages/AllPostsPage/AllPostsPage.module.css";
import PostById from "../../components/PostById/PostById";

const AllPostsPage = () => {
        const {id} = useParams();
        const [postsById, setPostsById] = useState([]);
        //const {state} = useLocation();
       // const navigate = useNavigate();

        useEffect(()=> {
            userService.getPostsById(id).then(value => setPostsById([...value]))
        },[])


        return (
            <div className={css.posts}>
                {postsById.map(post => <PostById key={post.id} post={post}/>)}
            </div>
    );
};

export default AllPostsPage;