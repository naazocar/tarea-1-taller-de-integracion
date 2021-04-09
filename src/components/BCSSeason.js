import React from 'react';
import '../styles/Series.css';
import { Link, useParams } from "react-router-dom";


export default function BCSSeason(props) {
    const BCSList = props.BCSList;
    var {season} = useParams();
    var chaptersPerSeason = {};
    var chapters = [];
    for (var key in BCSList) {
        if (BCSList[key].season === season) {
            chaptersPerSeason[BCSList[key].episode] = BCSList[key]
            chapters.push(BCSList[key].episode_id - 62);
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
                {keys.map((value) => {
                    return (
                        <Link to={`/better-call-saul/capitulo-${chapters[value - 1]}`}>
                            <h4>  Episodio {chapters[value - 1]}: { chaptersPerSeason[value]['title'] } </h4>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}