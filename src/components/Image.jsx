import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function Image({ url, tags, onDelete }) {
    const [showImage, setShowImage] = useState(false);

    function setImage() {
        setShowImage(!showImage);
        const display = document.getElementById("display");
        display.style.display = "flex";
        
        while (display.childNodes.length > 1) {
            display.removeChild(display.lastChild);
        }
        
        const image = document.createElement("img");
        image.src = url;
        image.alt = tags;
        display.appendChild(image);
    }

    return (
        <div className="image-container">
            <img src={url} alt={tags} className="image" onClick={() => setImage(url, tags)} />
            <FaTrash className="delete-icon" onClick={onDelete} />
        </div>
    );
}