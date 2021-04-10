import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css'

export default function SearchBox() {
    const [ search, setSearch ] = useState('');
    const [ options, setOptions ] = useState ([]);
    const [ display, setDisplay ] = useState(false);

    const characters = [];
    async function ExecuteRequest (pageNo) {
        axios
            .get(`https://tarea-1-breaking-bad.herokuapp.com/api/characters?limit=10&offset=${10*pageNo}`)
            .then(response => {
                if (response.data.length > 0) {
                    for (var i in response.data) {
                        characters.push(response.data[i].name);
                    }
                    setOptions(characters)
                    ExecuteRequest(pageNo + 1)
                }
            })
            .catch(err => {
                console.log(err)
            }
        )
    }
    
    useEffect(() => {
        ExecuteRequest(0);
    }, [])

    function handleChange(value) {
        setSearch(value);
        if (value !== '') {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }

    return (
        <div className='dropdown'>
            <input id='auto' 
            placeholder='Buscar...' 
            value={search}
            onChange={event => handleChange(event.target.value)} />
                {display && (
                    <div className='dropdown'>
                        {options.filter((name) => name.toLowerCase().indexOf(search.toLowerCase()) > - 1).map((value, i) => {
                            return (
                            <div className='dropdown-content' key={i} >
                                <Link class='pre' to={`/personajes/${value}`} >
                                    {value}
                                </Link>
                            </div>
                            )
                        })}
                    </div>
                )}
        </div>
    )
}