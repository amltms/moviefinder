import React, {useState} from 'react';
import {fetchData}  from '../Api';

const initialResource = fetchData();
export const Search = props => {
    const [resource, setResource] = useState(initialResource);
    
    const handleInput = (e) => {
      setResource(fetchData(e.target.value));
      const searchResult = resource.search.read();
      console.log(searchResult.results);
      props.onChange(searchResult.results)

    }
    
    return (
        <section className="searchbox=wrap">
            <input type="text" className="searchbox" onChange={handleInput}/>
        </section>
    )
}

