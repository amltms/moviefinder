import React from 'react'
import Item from './Item'

export const ItemList = ({results}) => {
    return (
        <section className="item-container">
            {results.map(item =>(
                <Item key={item.id} item={item} />
            ))}
        </section>
    )
}
