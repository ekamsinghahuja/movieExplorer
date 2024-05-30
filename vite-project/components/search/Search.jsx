import React, { useEffect, useState } from 'react';
import './Search.css'

function Search({fetchingQuery}) {
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchingQuery(query);
    };
    useEffect(()=>{
        console.log(query);
    },[query])
  return (
    <div>
        <h1 className='centered'>Search by Key-Words</h1>
        <form onSubmit={handleSubmit} className="search-form centered" >
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
      
    </div>
  )
}

export default Search
