import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BB from './components/BB';
import BCS from './components/BCS';
import Image from './components/SerieImage';
import BBSeason from './components/BBSeason';
import BCSSeason from './components/BCSSeason';
import BBEpisode from './components/BBEpisode';
import BCSEpisode from './components/BCSEpisode';
import Characters from './components/Characters';
import SearchBox from './components/SearchBox';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [BBList, setBBList] = useState([]);
  useEffect(() => {
      axios
          .get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad')
          .then(response => {
              setBBList(response.data);
          })
          .catch(err => {
              console.log(err)
          })
  }, [])

  const [ BCSList, setBCSList ] = useState ([]);
  useEffect(() => {
      axios
          .get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul')
          .then(response => {
              setBCSList(response.data);
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  
  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className='titulo'>
            <Link to='/home' className="link-inicio">
              <h1 className='div-inicio'> Tarea 1 </h1>
            </Link>
          </div>
          <div className='barra'>
            <SearchBox />
          </div>
        </div>
        <hr />
        <Switch>
          <Route path="/home">
            <div className="row">
              <div className="column">
                < Image nom={'bb'} />
                < BB BBList={BBList} />
              </div>
              <div className="column">
                < Image nom={'bcs'} />
                < BCS BCSList={BCSList} />
              </div>
            </div>
          </Route>
          <Route path={"/breaking-bad/temporada-:season/"}>
            <div>
              <BBSeason BBList={BBList} key={'bbseason'} />
            </div>
          </Route>
          <Route path={"/breaking-bad/capitulo-:episode"}>
            <div>
              <BBEpisode BBList={BBList} key={'bbepisode'} />
            </div>
          </Route>
          <Route path={"/better-call-saul/temporada-:season"}>
            <div>
              <BCSSeason BCSList={BCSList} key={'bcsseason'} />
            </div>
          </Route>
          <Route path={"/better-call-saul/capitulo-:episode"}>
            <div>
              <BCSEpisode BCSList={BCSList} key={'bcsepisode'} />
            </div>
          </Route>
          <Route path={"/personajes/:character"}>
            <div>
              <Characters key={'character'} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
