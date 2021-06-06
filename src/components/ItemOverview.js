import React from 'react'

export const ItemOverview = ({selectedItem}) => {
  if(selectedItem.length !== 0){  
    const item = selectedItem.item.read();
    console.log(item);
    return(
      <div>
        <li>{item.original_title}</li>
        <li>{item.release_date}</li>
        <li>{item.vote_average}</li>
        <li>{item.overview}</li>
        <li>
            <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster"></img>
        </li>
      </div>
    )
  }
  return null;

}
