import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import CharacterCard from './CharacterCard';


export default function BBCharacters() {
    var {character} = useParams();
    const [Char, setChar] = useState([]);
    const [Quote, setQuote] = useState([]);

    useEffect(() => {
        axios
            .get(`https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=${character.replace(' ', '+')}`)
            .then(response => {
                setChar(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [character]);

    useEffect(() => {
        axios
            .get(`https://tarea-1-breaking-bad.herokuapp.com/api/quote?author=${character.replace(' ', '+')}`)
            .then(response => {
                setQuote(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [character]);

    if (Char[0]) {
        return (
            <CharacterCard Chars={Char[0]} Quotes={Quote} />
        );
    }
    return (
        <h2>Cargando...</h2>
    )
}
