import React from 'react'
import './pegination.css'

const Peginating = ({ viseblePagesLength, pageSize, postsLength, onPage, pageNumber }) => {
    const pages = Math.ceil(postsLength / pageSize);
    const pagesArr = [];

    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i);
    }

    if (pagesArr.length <= 1) return null;

    return (
        <ul className='pagination'>
            {pagesArr.map(item => {
                const currentPageClassName = pageNumber === item ? 'paginationActive' : ''
                return (
                    <li
                        className={currentPageClassName}
                        key={item}
                        onClick={() => onPage(item)}
                    >
                        {item}
                    </li>
                )
            })}
        </ul>
    );
}

export default Peginating;