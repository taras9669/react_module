import React from 'react';

import {useDispatch} from "react-redux";
import {deleteUser} from "../../store/slices/user.slice";
import css from "../users/Users.module.css";

const User = ({user}) => {
    const {id, name, surname} = user;

    const dispatch = useDispatch();


    return (
        <div className={css.mainDiv}>
            <div>{name}</div>
            <div>{surname}</div>
            <button onClick={() => dispatch(deleteUser({user}))}>Delete</button>
        </div>
    );
};

export default User;