import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <>
      <ul>
        {images.map((img) => (
          <li
            key={img.id}
            onClick={() => onOpenModal(img.urls.regular, img.alt_description)}
          >
            <ImageCard img={img} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
