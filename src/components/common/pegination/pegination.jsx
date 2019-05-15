import React from 'react'
import './pegination.css'

const Peginating = ({ pageSize, postsLength, onPage }) => {
    const pages = Math.ceil(postsLength / pageSize);
    const pagesArr = [];

    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i);
    }

    return (
        <ul className='pagination'>
            {pagesArr.map(item => (
                <li
                    key={item}
                    onClick={() => onPage(item)}
                >
                    {item}</li>
            ))}
        </ul>
    );
}

export default Peginating;