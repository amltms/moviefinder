import React from 'react'

export const ItemOverview = ({selectedItem}) => {
  if(selectedItem.length !== 0){  
    const item = selectedItem.item.read();
    return(
      <div>
        <li>{item.original_title}</li>
        <li>{item.release_date}</li>
        <li>{item.vote_average}</li>
        <li>{item.overview}</li>
      </div>
    )
  }
  return null;

}
