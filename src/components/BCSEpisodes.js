import React from 'react';
import '../styles/Series.css';
import { Link, useParams } from "react-router-dom";


export default function BCSEpisodes(props) {
    const BCSList = props.BCSList;
    var {season} = useParams();

    var chaptersPerSeason = {};
    for (var key in BCSList) {
        if (BCSList[key].season === season) {
            chaptersPerSeason[BCSList[key].episode] = BCSList[key]
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
                        <Link to={`/better-call-saul/temporada-${season}/capitulo-${value}`}>
                            <h4>  Episodio {value}: { chaptersPerSeason[value]['title'] } </h4>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}