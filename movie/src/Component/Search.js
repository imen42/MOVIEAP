import React from 'react'

const Search = ({text , handleText}) => {
  return (
    <div className='header-container'>
        <div className='search'>
        <input type="text" placeholder='Enter movie name'  value={text} onChange={handleText}/>
        <button>search</button>
    </div>
    </div>
  )
}

export default Search