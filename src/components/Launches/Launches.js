import React, {useEffect, useState} from 'react';
import Launch from "./Launch";


const Launches = () => {
    const [launchesList, setLaunchesList] = useState([])
    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value =>
                setLaunchesList(value.filter(flight => flight.launch_year !== '2020'))
            )
    }, [])
    return (
        <div className="LaunchBox">
           {launchesList.map(value => <Launch key={value.flight_number} mission_name={value.mission_name} launch_year={value.launch_year} image={value.links.mission_patch_small} />)}
        </div>
    );
}

export default Launches;