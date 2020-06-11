import React from 'react'
import Result from './Result'

export const Results = ({results}) => {
    return (
        <section className="item-container">
            {results.map(result =>(
                <Result key={result.id} result={result} />
            ))}
        </section>
    )
}
