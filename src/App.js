import React, {useState,useReducer, Suspense} from 'react';
import './App.css';

import { fetchData } from "./Api";
import {Search} from './components/Search';
import {ItemList} from './components/ItemList';
import {PopularItems} from './components/PopularItems';
import { ItemOverview } from './components/ItemOverview';

const initialResource = fetchData();

function App() {
  const [state, setState] = useReducer((state, newState) => ({...state, ...newState}),{
    results: [], 
    selected: []
  })

  const selectedItem = id => {
    setState({selected: fetchData(id)})
  }

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="App">
        <Suspense fallback={<h1>Loading Item</h1>}>
        {(typeof state.selected !=[] )? <ItemOverview selectedItem={state.selected} /> : false}
        </Suspense>

        <Search onChange={value => setState({results: value})}/>
        
        <ItemList  results={state.results} selectedItem={selectedItem} />
        
        <PopularItems selectedItem={selectedItem}/>
      </div>
    </Suspense>
  );
}

export default App;
