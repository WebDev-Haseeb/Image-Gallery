import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <div className="header">
            <h1>Image Gallary with JavaScript</h1>
            <p>Search and Download Images within Seconds</p>
            <div className="searchContainer">
                <FaSearch className="icon"/>
                <input type="text" className="search" placeholder="Search image" />
            </div>
        </div>
    )
}