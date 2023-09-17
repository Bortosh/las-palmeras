const Gallery = ({ images }) => {

    return (
        <div
            className="gallery-container"
        >
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image} alt={`Imagen ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;