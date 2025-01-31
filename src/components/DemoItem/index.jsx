
function DemoItem({title, image, description, github, video}) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} >
            <h3>{title}</h3>
            <img src={image} />
            <p>{description}</p>
            <a href={github} target="_blank">Link to Github</a>
            <a href={video} target="_blank">Link to video</a>
        </div>
    );
}

export default DemoItem;