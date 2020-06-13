import React from 'react'

function Item({item}) {
    return (
        <div key={item.id} className="item">
            <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster"></img>
        </div>
    )
}

export default Item
