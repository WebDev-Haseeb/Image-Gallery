export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className="footer" id="footer">
            <p>© {year} Image Gallary. All rights reserved.</p>
        </div>
    )
}