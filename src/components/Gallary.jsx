import { useState } from "react";
import Image from "./Image";

const gallary = [
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
    { url: "./images/img14.jpg", tags: "image" }
];

export default function Gallary() {
    const [images, setImages] = useState(gallary);

    return (
        <div className="gallary">
            {images.map((image, index) => (
                <Image key={index} url={image.url} tags={image.tags}/>
            ))}
        </div>
    );
}