import { BsDownload } from "react-icons/bs";
const ImageCard = ({ item, onOpenModal }) => {
  return (
    <div>
      <div>
        <img
          src={item.url.small}
          alt={item.alt_description}
          onClick={() => onOpenModal(item)}
        />
      </div>
      <div>
        <ul>
          <li>
            <h3>Likes</h3>
            <p>{item.likes}</p>
          </li>
          <li>
            <h3>Downloads</h3>
            <a href={item.links.download} target="_blank" rel="noreferrer">
              <BsDownload size={20} />
            </a>
          </li>
          <li>
            <h3>Views</h3>
            <p>{item.views}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
