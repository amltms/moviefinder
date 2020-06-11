import React, {useState, Suspense} from 'react';
import axios from 'axios';
import './App.css';
import {fetchData}  from './Api';
import {Search} from './components/Search';
import {Results} from './components/Results';
import {PopularItems} from './components/PopularItems';
import { ItemOverview } from './components/ItemOverview';

const resource = fetchData(); 

function App() {
  const apikey = "5042d9bd250e2fbd1f65fceff13e225d";
  const [state, setState] = useState({
    results:[],
    selected:{}
  })



  const handleInput = (e) => {
    axios('https://api.themoviedb.org/3/search/multi?api_key='
    +apikey
    +'&language=en-UK&query='
    +e.target.value
    +'&page=1&include_adult=false').then(({data}) => {
      let results = data.results;
      console.log(results);
      setState(prevState =>{
        return {...prevState, results: results}
      })

    });
  }

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="App">
        <Search handleInput={handleInput}/>
        <Results  results={state.results} />
        <ItemOverview />
        <PopularItems />
      </div>
    </Suspense>
  );
}



  export default App;
