const ImageCard = ({ img }) => {
  return (
    <div>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        width="300"
        height="300"
      />
    </div>
  );
};

export default ImageCard;
