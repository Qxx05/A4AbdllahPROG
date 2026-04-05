{/* Abdllah Abbara - 991798700*/}

import { useState } from "react";

function SearchBar(props) {
    const [city, setCity] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearch(city);
}

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
);
}

export default SearchBar;