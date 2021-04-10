import React from 'react';
import '../styles/Characters.css'
import { Link } from "react-router-dom";


export default function CharacterCard(props) {
    const char = props.Chars;
    const quotes = props.Quotes;

    var keys = [];
    for (var key2 in quotes) {
        keys.push(key2);
    }

    return (
        <div class='row'>
            <div class='column'>
                <h1> {char.name} </h1>
                <p><b>Id:</b> {char.char_id} </p>
                <p><b>Occupation:</b> {char.occupation.join(', ')} </p>
                <p><b>Status:</b> {char.status} </p>
                <p><b>Nickname:</b> {char.nickname} </p>
                <p><b>Portrayed:</b> {char.portrayed} </p>
                <p><b>Category:</b> {char.category} </p>
                <p><b>Breaking Bad Appearances:</b> {
                    char.appearance.length > 0
                    ? char.appearance.map((value) => {
                        return (
                            <Link class='pre' to={`/breaking-bad/temporada-${value}`}>
                                - {value} -
                            </Link>
                        )
                    })
                    : '-'} </p>
                <p><b>Better Call Saul Appearances:</b> {
                    char.better_call_saul_appearance.length > 0
                    ? char.better_call_saul_appearance.map((value) => {
                        return (
                            <Link class='pre' to={`/better-call-saul/temporada-${value}`}>
                                - {value} -
                            </Link>
                        )
                    })
                    : '-'
                } </p>
                <p><b>Quotes:</b> {
                        keys.map((value) => {
                            return (
                                <p>"{quotes[value].quote}" - <b>{quotes[value].series}</b></p>
                            )
                        })
                    }
                </p>

            </div>
            <div class='column'>
                <img src={char.img} alt="imagen"></img>
            </div>
        </div>
    );
}