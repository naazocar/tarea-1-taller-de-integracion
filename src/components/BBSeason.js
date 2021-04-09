import React from 'react';
import '../styles/Series.css';
import { Link, useParams } from "react-router-dom";


export default function BBSeason(props) {
    const BBList = props.BBList;
    var {season} = useParams();
    var chaptersPerSeason = {};
    var chapters = [];
    for (var key in BBList) {
        if (BBList[key].season === season) {
            chaptersPerSeason[BBList[key].episode] = BBList[key]
            chapters.push(BBList[key].episode_id);
        } 
    }

    var keys = [];
    for (var key2 in chaptersPerSeason) {
        keys.push(key2);
    }

    return (
        <div id="info">
            <h1>Temporada {season} </h1>
            <div id="capitulos">
                {keys.map((value, id) => {
                    return (
                        <Link to={`/breaking-bad/capitulo-${chapters[value-1]}`}>
                            <h4>  Episodio {chapters[value - 1]}: { chaptersPerSeason[value]['title'] } </h4>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}