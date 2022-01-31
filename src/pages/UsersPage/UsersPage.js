import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {Outlet} from "react-router-dom";

import User from "../../components/User/User";
import css from './UsersPage.module.css'


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])
    return (
        <div className={css.users}>
            <div >
                <h1>USERS</h1>
                {users.map(user=> <User key={user.id} user={user}/> )}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default UsersPage;