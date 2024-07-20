export default function Image({ url, tags }) {
    return (
            <img src={url} alt={tags} className="image"/>
    );
}