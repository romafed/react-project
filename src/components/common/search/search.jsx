import React from 'react'
import './search.css'

const Search = ({ placeholder, hendelSubmit, hendleValue, children, value }) => {
    return (
        <form
            className='searchForm'
            onSubmit={(e) => hendelSubmit(e)}
        >
            <input
                className='searchForm__search'
                type="text" placeholder={placeholder}
                onChange={(e) => hendleValue(e)}
                value={value}
            />
            <button className='searchForm__btn' type='submit'>{children}</button>
        </form>
    );
}

export default Search;