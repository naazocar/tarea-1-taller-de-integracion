import React from 'react';
import '../styles/Characters.css'

export default function CharacterCard(props) {
    return (
        <div>
            <h1> {props.chars.name} </h1>
            <img src={props.chars.img} alt="imagen"></img>
        </div>
    );
}