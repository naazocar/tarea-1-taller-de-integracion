import React from 'react';
import BCSCard from './BCSCard';
import '../styles/Series.css';

export default function Series(props) {
    const BCSList = props.BCSList;
    
    var seasons = [];
    for (var key in BCSList) {
        if (seasons.includes(parseInt(BCSList[key].season))) {
            // pass
        } else {
            seasons.push(parseInt(BCSList[key].season))
        } 
    }

    var chaptersPerSeason = {};
    for (var season in seasons) {
        chaptersPerSeason[seasons[season]] = {}
    }

    for (var key2 in BCSList) {
        for (var season2 in chaptersPerSeason) {
            if (BCSList[key2].season === season2) {
                chaptersPerSeason[season2][BCSList[key2].episode] = BCSList[key2]
            } 
        }
    }
    
    return(
        <section className='seasons-container'>
            {seasons.map((value, id) => {
                return <BCSCard value={value} id={id} CPS={chaptersPerSeason[value]} />
            })}
        </section>
    )
}