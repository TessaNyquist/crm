import react, { useState } from "react";
import axios from "axios";

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSearch = () => {
        //onSearch(searchTerm);
        try {
            // Send an HTTP POST request to your backend API endpoint
            const response = await axios.post('/api/search', { query: searchTerm });

            // Handle the response data (results) from the server
            onSearch(response.data.results);
        } catch (error) {
            console.error('Error searching:', error);
            // Handle errors, e.g., show an error message to the user
        }
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