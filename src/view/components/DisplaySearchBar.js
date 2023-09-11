// DisplaySearchBar.js

import React, { useState } from 'react';
import SearchBar from './SearchBar';

function DisplaySearchBar() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        // Simulate a search request (replace with your actual search logic)
        // For this example, we'll set some dummy results
        setSearchResults([`Result 1 for "${query}"`, `Result 2 for "${query}"`]);
    };

    return (
        <div className="display-search-bar">
            <h2>Search Page</h2>
            <SearchBar onSearch={handleSearch} />
            <div className="search-results">
                <h3>Search Results</h3>
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DisplaySearchBar;
