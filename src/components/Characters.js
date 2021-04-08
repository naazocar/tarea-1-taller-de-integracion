import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function Series() {
    const [ CharacterList, setCharacterList ] = useState ([]);

    useEffect(() => {
        axios
            .get('https://tarea-1-breaking-bad.herokuapp.com/api/characters')
            .then(response => {
                console.log(response);
                setCharacterList(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <section className='characters-list'>
            <h2>Personajes</h2>
            {CharacterList.map((chars, id) => {
                return <CharacterCard key={id} chars={chars} />
            })}
        </section>
    )
}