import { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Image from "./Image";

const gallery = [
    { url: "./images/img1.jpg", tags: "image" },
    { url: "./images/img2.jpg", tags: "image" },
    { url: "./images/img3.jpg", tags: "image" },
    { url: "./images/img4.jpg", tags: "image" },
    { url: "./images/img5.jpg", tags: "image" },
    { url: "./images/img6.jpg", tags: "image" },
    { url: "./images/img7.jpg", tags: "image" },
    { url: "./images/img8.jpg", tags: "image" },
    { url: "./images/img9.jpg", tags: "image" },
    { url: "./images/img10.jpg", tags: "image" },
    { url: "./images/img11.jpg", tags: "image" },
    { url: "./images/img12.jpg", tags: "image" },
    { url: "./images/img13.jpg", tags: "image" },
    { url: "./images/img14.jpg", tags: "image" },
    { url: "./images/img15.jpg", tags: "image" },
    { url: "./images/img16.jpg", tags: "image" },
    { url: "./images/img17.jpg", tags: "image" },
    { url: "./images/img18.jpg", tags: "image" }
];

export default function Gallery() {
    const [images, setImages] = useState(gallery);
    const [columns, setColumns] = useState([[], [], []]);
    const [showImage, setShowImage] = useState(false);

    function handleCloseClick() {
        setShowImage(false);
        document.getElementById("display").style.display = "none";
    }

    function getColumnCount() {
        const width = window.innerWidth;
        if (width > 850) return 3;
        if (width > 600) return 2;
        return 1;
    }

    function distributeImages(images) {
        const columnCount = getColumnCount();
        const columns = Array.from({ length: columnCount }, () => []);
        images.forEach((image, index) => {
            columns[index % columnCount].push(image);
        });
        return columns;
    }

    useEffect(() => {
        const updateColumns = () => setColumns(distributeImages(images));
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, [images]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/svg+xml') {
            showAlert('badAlert');
            return;
        }

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImage = { url: reader.result, tags: "new image" };
                setImages([...images, newImage]);
                const element = document.getElementById("footer");
                element.scrollIntoView({ behavior: "smooth" });
                showAlert('goodAlert');
            };
            reader.readAsDataURL(file);
        } else {
            showAlert('badAlert');
        }
    };

    function showAlert(className) {
        document.getElementsByClassName(className)[0].classList.add('showAlert');

        setTimeout(() => {
            document.getElementsByClassName(className)[0].classList.remove('showAlert');
        }, 3000);
    }

    const handleDelete = (url) => {
        setImages(images.filter((img) => img.url !== url));
    };

    return (
        <>
            <div className="goodAlert">
                <span>Image added Successfully!</span>
            </div>

            <div className="badAlert">
                <span>An Error occured!</span>
            </div>

            <input
                type="file"
                id="fileInput"
                accept=".png, .jpg, .jpeg, .svg"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <button className="add" onClick={() => document.getElementById('fileInput').click()}>
                <FaPlus className="add-icon" />
                <span className="button-text">Add Image</span>
            </button>

            <div className="gallery">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="column">
                        {column.map((image, index) => (
                            <Image key={index} url={image.url} tags={image.tags} onDelete={() => handleDelete(image.url)}/>
                        ))}
                    </div>
                ))}
            </div>

            <div id="display">
                <FaTimes className="close" onClick={handleCloseClick}/>
            </div>
        </>
    );
}
