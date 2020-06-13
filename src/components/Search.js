import React from 'react';
import axios from 'axios';

export const Search = props => {
    const apikey = "5042d9bd250e2fbd1f65fceff13e225d";
    
    const handleInput = (e) => {
        axios('https://api.themoviedb.org/3/search/multi?api_key='
        +apikey
        +'&language=en-UK&query='
        +e.target.value
        +'&page=1&include_adult=false').then(({data}) => {
          props.onChange(data.results)
        });
      }
    
    return (
        <section className="searchbox=wrap">
            <input type="text" className="searchbox" onChange={handleInput}/>
        </section>
    )
}

