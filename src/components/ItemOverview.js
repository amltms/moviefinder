import React from 'react'
import {fetchData}  from '../Api';

const resource = fetchData();

export const ItemOverview = () => {
    const movie = resource.movie.read();
    return(
      <div>
        <li>{movie.title}</li>
        <li>{movie.release_date}</li>
        <li>{movie.vote_average}</li>
        <li>{movie.overview}</li>
      </div>
    )
}
