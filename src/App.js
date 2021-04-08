import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import CharacterList from './components/Characters';
import BB from './components/BB';
import BCS from './components/BCS';
import Image from './components/SerieImage';
import BBEpisodes from './components/BBEpisodes';
import BCSEpisodes from './components/BCSEpisodes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [BBList, setBBList] = useState([])
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
        <Link to='/home' className="link-inicio">
          <h1 className='div-inicio'> Tarea 1 </h1>
        </Link>
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
          <Route path={"/breaking-bad/temporada-:season"}>
            <div>
              <BBEpisodes BBList={BBList}/>
            </div>
          </Route>
          <Route path={"/better-call-saul/temporada-:season"}>
            <div>
              <BCSEpisodes BCSList={BCSList}/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
