import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import Album from "../../components/Album/Album";



const UserAlbumsPage = () => {
    const  [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getAlbumsById(id).then(value => setAlbums([...value]))
    },[])
    return (
        <div>
            <div>
                <h1>ALBUMS</h1>
                {albums.map(album=> <Album key={album.id} album={album}/> )}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default UserAlbumsPage;