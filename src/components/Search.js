import React from 'react'

export const Search = ({handleInput, search}) => {

    return (
        <section className="searchbox=wrap">
            <input type="text" className="searchbox" onChange={handleInput}/>
        </section>
    )
}
