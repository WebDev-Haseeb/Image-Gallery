import { FaSearch } from "react-icons/fa";

export default function Header({setSearchQuery}) {
    function handleInputChange(event) {
        let query = event.target.value;
        setSearchQuery(query.toLowerCase());
    }

    return (
        <div className="header">
            <h1>Image Gallary</h1>
            <p>Search and Download Images within Seconds</p>
            <div className="searchContainer">
                <FaSearch className="icon"/>
                <input type="text" className="search" placeholder="Search image" onChange={handleInputChange}/>
            </div>
        </div>
    )
}