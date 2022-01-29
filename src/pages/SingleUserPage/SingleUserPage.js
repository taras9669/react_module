import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import css from './SingleUserPage.module.css'

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(()=> {
        if (state){
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    },[state, id, user])
    return (
        <div>
            {user && (
                <div className={css.user}>
                    <div className={css.userDiv}>ID: {user.id}</div>
                    <div className={css.userDiv}>NAME: {user.name}</div>
                    <div className={css.userDiv}>USERNAME: {user.username}</div>
                    <div className={css.userDiv}>EMAIL: {user.email}</div>
                    <div className={css.userDiv}>CITY: {user.address.city}</div>
                    <div className={css.userDiv}>PHONE: {user.phone}</div>
                    <button>User Details</button>
                </div>
            )}
        </div>
    );
};

export default SingleUserPage;