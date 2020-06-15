import React from 'react'

function Item({item, selectedItem}) {
    return (
        <div key={item.id} className="item" onClick={() => selectedItem(item.id)}>
            <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster"></img>
        </div>
    )
}

export default Item
