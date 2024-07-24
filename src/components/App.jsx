import { useState } from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function App() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <Header setSearchQuery={setSearchQuery}/>
            <Gallery searchQuery={searchQuery}/>
            <Footer/>
        </div>
    )
}