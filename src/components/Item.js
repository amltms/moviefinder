import React from 'react';




export const Item = ({item, selectedItem, props}) => {
    return (
        <div key={item.id} className="item" onClick={() => selectedItem(item.id)}>
            <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster"></img>
        </div>
    )
}

