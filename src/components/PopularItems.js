import React from 'react'
import {Results} from './Results';
import {fetchData}  from '../Api';

const resource = fetchData();

export const PopularItems = () => {
    const items = resource.popularItems.read();
    return (
        <Results results={items.results}></Results>
    )
}
