import { FaTrash } from "react-icons/fa";

export default function Image({ url, tags, onDelete }) {
    return (
        <div className="image-container">
            <img src={url} alt={tags} className="image" />
            <FaTrash className="delete-icon" onClick={onDelete} />
        </div>
    );
}