import React from 'react';


const Photo = ({photo}) => {

    return (
        <div>
            <div>ALBUMID: {photo.albumId}</div>
            <div>ID: {photo.id}</div>
            <div>TITLE: {photo.title}</div>
            <div><img src={photo.thumbnailUrl} alt="picture"/></div>
        </div>
    );
};

export default Photo;