import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} onOpenModal={onOpenModal} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
