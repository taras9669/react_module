import React from 'react';
import css from "./Photo.module.css"

const Photo = ({photo}) => {

    return (
        <div className={css.wrap}>
            <div className={css.photoBlocks}>
                <div> <strong> ALBUM ID:</strong>  {photo.albumId}</div>   </div>
            <div className={css.photoBlocks}>
                <div> <strong>ID:</strong> {photo.id}</div> </div>
            <div className={css.photoBlocks}>
                <div><strong>TITLE: </strong>{photo.title}</div>
                <div><img src={photo.thumbnailUrl} alt="picture"/></div>
            </div>
        </div>
    );
};

export default Photo;