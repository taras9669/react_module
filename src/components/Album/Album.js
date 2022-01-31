import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "./Album.module.css";

const Album = ({album}) => {
    const navigate = useNavigate();

    return (
        <div className={css.wrap}>
            <div className={css.albumBlocks}>
                <div> <strong> ID: </strong> {album.id}</div>
            </div>
            <div className={css.albumBlocks}>
                <div> <strong> TITLE: </strong> {album.title} </div>
            </div>
            <button className={css.btnWrap} onClick={() => {
                    navigate(album.id+`/photos`)
                }}>Photos
            </button>

        </div>
    );
};

export default Album;