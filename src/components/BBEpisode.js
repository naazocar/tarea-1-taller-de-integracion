import React from 'react';
import '../styles/Series.css';
import { Link, useParams } from "react-router-dom";


export default function BBSeason(props) {
    const BBList = props.BBList;
    var {episode} = useParams();

    var chapter = {};
    for (var key in BBList) {
        if (parseInt(BBList[key].episode_id) === parseInt(episode)) {
            chapter = BBList[key]
        } 
    };

    var dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var keys = [];
    for (var key2 in chapter) {
        keys.push(key2);
    };

    return (
        <div id="info">
            <h1> Episodio {chapter.episode_id} </h1>
            <div id="capitulo">
                <p><b>Id del episodio:</b> {chapter.episode_id}</p>
                <p><b>Titulo:</b> {chapter.title}</p>
                <p><b>Temporada:</b> {chapter.season}</p>
                <p><b>Numero de episodio:</b> {chapter.episode}</p>
                <p><b>Fecha de estreno:</b> {new Date(chapter.air_date).toLocaleDateString("en-US", dateOptions)}</p>
                <p><b>Serie:</b> {chapter.series}</p>
                <p><b>Personajes:</b> </p>
                {
                    chapter.characters.map((value) => {
                        return (
                        <Link to={`/personajes/${value}`}>
                            <p> {value} </p>
                        </Link>)
                    })
                }
            </div>
        </div>
    );
}