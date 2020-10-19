import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLaunches from '../useLaunches/useLaunches';
import Main from '../Main/Main.js';
import YouTube from 'react-youtube';
import './details.css';

const Details = (props) => {

    const [launch, setLaunch] = useState({});
    const { getLaunch } = useLaunches();

    useEffect(() => {
       setLaunch(getLaunch(props.match.params.id))
    }, [getLaunch]);

    
    const history = useHistory();
    
    //? TODO: Прелоадер
    if(!launch) return <div>Загрузка...</div> 
  
    return (
    <>
        <Main name={launch.name}/>
        <main className="details">
            <div className="container">
                <div className="details-row">
                    <div className="details-image">
                        <img src={launch.links?.patch.small} alt={launch.name}/>
                    </div>
                    <div className="details-content">
                    <p className="details-description">{launch?.details}</p>
                    </div>
                </div>
                <YouTube className="details-youtube" videoId={launch.links?.youtube_id} />
            </div>
            <a onClick={history.goBack} className="button button-back">go back</a>
        </main>
    </>
    )
}

export default Details;