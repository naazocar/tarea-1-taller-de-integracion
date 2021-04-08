import React from 'react';
import '../styles/Series.css';
import { Link } from "react-router-dom";


export default function BBCard(props) {
    var keys = [];
    for (var i in props.CPS) {
        keys.push(i)
    }

    return (
        <div id="info">
            <Link to={`/breaking-bad/temporada-${props.value}`} className="temporada">
                <h2> Temporada { props.value } </h2>
            </Link>
        </div>
    );
}