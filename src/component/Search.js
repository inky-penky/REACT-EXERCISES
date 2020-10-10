import React from 'react'

const Search = ({query , handleQuery}) => {
    return (
        <div>
            SEARCH:<input type="search" value={query} onChange={e => handleQuery(e.target.value)}/>
        </div>
    )
}

export default Search

