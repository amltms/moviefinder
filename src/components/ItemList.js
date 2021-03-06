import React from 'react'
import {Item} from './Item'

export const ItemList = ({results, selectedItem}) => {
    return (
        <section className="item-container">
            {results.map(item =>(
               item.poster_path &&<Item key={item.id} item={item} selectedItem={selectedItem}/>
            ))}
        </section>
    )
}
