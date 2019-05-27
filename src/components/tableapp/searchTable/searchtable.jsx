import React from 'react'

const SearchTable = () => {
    return (
        <form className='addtodo'>
            <input className='addtodo__search' type="text" placeholder='Add todo...' />
            <button className='addtodo__btn' type='submit'>Add</button>
        </form>
    );
}

export default SearchTable;