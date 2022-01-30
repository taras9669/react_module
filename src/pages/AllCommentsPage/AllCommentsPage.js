import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from "../AllPostsPage/AllPostsPage.module.css";
import {postService} from "../../services/post.service";
import CommentById from "../../components/CommentById/CommentById";

const AllCommentsPage = () => {
    const {id} = useParams();
    const [commentsById, setCommentsById] = useState([]);

    useEffect(()=> {
        postService.getCommentsById(id).then(value => setCommentsById([...value]))
    },[])


    return (
        <div className={css.comments}>
            {commentsById.map(comment => <CommentById key={comment.id} comment={comment}/>)}
        </div>
    );
};


export default AllCommentsPage;