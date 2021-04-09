import React from 'react';
import '../styles/Series.css';
import { Link, useParams } from "react-router-dom";


export default function BCSSeason(props) {
    const BCSList = props.BCSList;
    var {episode} = useParams();
    episode = parseInt(episode) + 62;
    console.log(episode);

    var chapter = {};
    for (var key in BCSList) {
        if (parseInt(BCSList[key].episode_id) === parseInt(episode)) {
            chapter = BCSList[key]
        } 
    }

    var keys = [];
    for (var key2 in chapter) {
        keys.push(key2);
    }

    if (chapter.characters) {
        return (
            <div id="info">
                <h1> Episodio {chapter.episode_id - 62} </h1>
                <div id="capitulo">
                    <p>Id del episodio: {chapter.episode_id}</p>
                    <p>Titulo: {chapter.title}</p>
                    <p>Temporada: {chapter.season}</p>
                    <p>Numero de episodio: {chapter.episode}</p>
                    <p>Fecha de estreno: {chapter.air_date}</p>
                    <p>Serie: {chapter.series}</p>
                    <p>Personajes: </p>
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
    return (
        <h2> Cargando ... </h2>
    )
}