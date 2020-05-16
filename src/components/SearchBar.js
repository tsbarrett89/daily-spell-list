import React from 'react'

const SearchBar = props => {

    const queryChange = e => {
        e.preventDefault()
        props.setQuery(e.target.value)
    }

    return (
        <form>
            <input
                name='query'
                value={props.query}
                onChange={queryChange}
            />
        </form>
    )
}

export default SearchBar