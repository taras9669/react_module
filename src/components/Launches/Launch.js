import React from 'react';
import './launch.css';


const Launch = (props) => {
    const {mission_name, launch_year, image} = props;

    return (
        <div className="LaunchDiv">
            <div>MISSION NAME: {mission_name}</div>
            <div>YEAR: {launch_year}</div>
            <img src={image} alt={'name'}/>
        </div>
    );
};

export default Launch;