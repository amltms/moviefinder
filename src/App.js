import React, {useState, Suspense} from 'react';
import './App.css';

import {Search} from './components/Search';
import {ItemList} from './components/ItemList';
import {PopularItems} from './components/PopularItems';
import { ItemOverview } from './components/ItemOverview';


function App() {
  const [state, setState] = useState({
    results:[],
    selected:{}
  })

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="App">
        <Search onChange={value => setState(prevState =>{
            return {...prevState, results: value}
          })}/>
        <ItemList  results={state.results} />
        <ItemOverview />
        <PopularItems />
      </div>
    </Suspense>
  );

}
  export default App;
