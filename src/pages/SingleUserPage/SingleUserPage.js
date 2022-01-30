import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import css from './SingleUserPage.module.css'

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(()=> {
        if (state){
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    },[id])
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
                    <button onClick={() => {
                        navigate(`posts`)
                    }}>Posts of user</button>
                    <div><Outlet/></div>
                </div>

            )}
        </div>
    );
};

export default SingleUserPage;