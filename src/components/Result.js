import React from 'react'

function Result({result}) {
    return (
        <div key={result.id} className="item">
            
            <img src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`} alt="poster"></img>
        </div>
    )
}

export default Result
