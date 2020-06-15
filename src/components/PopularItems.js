import React from 'react'
import {ItemList} from './ItemList';
import {fetchData}  from '../Api';

const resource = fetchData();

export const PopularItems = ({selectedItem}) => {
    const items = resource.popularItems.read();
    return (
        <ItemList results={items.results} selectedItem={selectedItem}></ItemList>
    )
}
