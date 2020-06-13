import React from 'react'
import {fetchData}  from '../Api';

const resource = fetchData();

export const ItemOverview = () => {
    const selected = resource.movie.read();
    return(
      <div>
        <li>{selected.title}</li>
        <li>{selected.release_date}</li>
        <li>{selected.vote_average}</li>
        <li>{selected.overview}</li>
      </div>
    )
}
