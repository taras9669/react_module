import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div className={css.userDiv}>
            <div className={css.user}>
                <Link to={id.toString()} state={user}>NAME: {name}</Link>
            </div>
        </div>
    );
};

export default User;