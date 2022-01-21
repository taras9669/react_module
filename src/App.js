import React, {useState} from 'react';


import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css';


const App = () => {
    const [user, setUser] = useState(null);
    const [userId, setuserId] = useState(null);


    const getUser = (user) => {
      setUser(user)
        setuserId(null)
    }
    const getUserId = (id) => {
      setuserId(id)
    }

    return (
        <div>
          <div className={css.topDiv}>
              <Users getUser={getUser}/>
              {user && <UserDetails user={user} getUserId={getUserId}/>}
          </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;