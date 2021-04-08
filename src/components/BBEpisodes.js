import React from 'react';
import '../styles/Series.css';
import { Link, useParams } from "react-router-dom";


export default function BBEpisodes(props) {
    const BBList = props.BBList;
    var {season} = useParams();

    var chaptersPerSeason = {};
    for (var key in BBList) {
        if (BBList[key].season === season) {
            chaptersPerSeason[BBList[key].episode] = BBList[key]
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
                        <Link to={`/breaking-bad/temporada-${season}/capitulo-${value}`}>
                            <h4>  Episodio {value}: { chaptersPerSeason[value]['title'] } </h4>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}