import React from 'react';
import {useNavigate} from "react-router-dom";

const Album = ({album}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>ID: {album.id}</div>
            <div>TITLE: {album.title}</div>
            <button onClick={() => {
                navigate(album.userId+`/photos`)
            }}>Albums</button>
        </div>
    );
};

export default Album;