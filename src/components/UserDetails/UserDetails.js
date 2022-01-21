import React from 'react';

import css from './Userdetails.module.css'

const UserDetails = ({user, getUserId}) => {

    return (
    <div className={css.userMain}>
        <div className={css.user}>
            <div className={css.userDiv}>ID: {user.id}</div>
            <div className={css.userDiv}>NAME: {user.name}</div>
            <div className={css.userDiv}>USERNAME: {user.username}</div>
            <div className={css.userDiv}>EMAIL: {user.email}</div>
            <div className={css.userDiv}>CITY: {user.address.city}</div>
            <div className={css.userDiv}>PHONE: {user.phone}</div>
        </div>
        <button onClick={()=>getUserId(user.id)} className={css.posts}>Get posts</button>
    </div>
    );
};

export default UserDetails;