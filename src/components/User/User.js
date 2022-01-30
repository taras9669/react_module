import React from 'react';
import {Link, useNavigate} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div className={css.userDiv}>
            <div className={css.user}>
                <Link to={id.toString()} state={user}>NAME: {name}</Link>
                <button onClick={() => {
                    navigate(id+`/albums`)
                }}>Albums</button>
            </div>
        </div>
    );
};

export default User;