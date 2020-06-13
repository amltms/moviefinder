import React from 'react'
import {ItemList} from './ItemList';
import {fetchData}  from '../Api';

const resource = fetchData();

export const PopularItems = () => {
    const items = resource.popularItems.read();
    return (
        <ItemList results={items.results}></ItemList>
    )
}
