import React from 'react';
import {useSelector} from "react-redux";

import {useDispatch} from "react-redux";
import {addUser} from "../../store/slices/user.slice";
import User from "../user/User";


const Users = () => {
    const {users} = useSelector(store => store.users);
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        const name = e.target.userName.value;
        const surName = e.target.userSurname.value;
        const user = {id: new Date().getTime(), name, surname: surName}
        dispatch(addUser({user}))

    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder={"name"} name={"userName"}/>
                <input type="text" placeholder={"surname"} name={"userSurname"}/>
                <button>Add</button>
            </form>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};
export default Users;