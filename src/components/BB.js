import React from 'react';

import BBCard from './BBCard';
import '../styles/Series.css';

export default function Series(props) {
    const BBList = props.BBList;

    var seasons = [];
    for (var key in BBList) {
        if (seasons.includes(parseInt(BBList[key].season))) {
            // pass
        } else {
            seasons.push(parseInt(BBList[key].season))
        } 
    }

    var chaptersPerSeason = {};
    for (var season in seasons) {
        chaptersPerSeason[seasons[season]] = {}
    }

    for (var key2 in BBList) {
        for (var season2 in chaptersPerSeason) {
            if (BBList[key2].season === season2) {
                chaptersPerSeason[season2][BBList[key2].episode] = BBList[key2]
            } 
        }
    }

    return(
        <section className='seasons-container'>
            {seasons.map((value, id) => {
                return <BBCard value={value} id={id} CPS={chaptersPerSeason[value]} />
            })}
        </section>
    )
}