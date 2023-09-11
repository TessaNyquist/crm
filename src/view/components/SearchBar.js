import react, { useState } from "react";

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
export default SearchBar;