import React from 'react';

import css from './User.module.css'

const User = ({user,getUser}) => {
    return (
        <div className={css.wrap}>
            <div>{user.id}---{user.name}---{user.username}</div>
            <button onClick={()=>getUser(user)}>Details</button>
        </div>
    );
};

export default User;