import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import Photo from "../../components/Photo/Photo";


const AllAlbumPhotos = () => {
    const  [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(() => {
        userService.getPhotosByAlbumId(albumId).then(value => setPhotos([...value]))
    },[albumId])
    return (
        <div>
            <div>
                <h1>PHOTOS</h1>
                {photos.map(photo => <Photo key={photo.id} photo={photo}/> )}
            </div>
        </div>
    );
};

export default AllAlbumPhotos;