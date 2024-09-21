import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchhImages } from "./servises.api";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (query) => {
    try {
      setError(false);
      setImages([]);
      setPage(1);
      setQuery(query);
      setTotalPages(0);
      setIsLoading(true);
      const response = await fetchhImages(query, page);
      setImages(response.imeges);
      setTotalPages(response.totalPages);
    } catch (error) {
      setError(true);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      setIsLoading(true);
      const response = await fetchhImages(query, page + 1);
      setImages((prevImages) => [...prevImages, ...response.imeges]);
      setPage(page + 1);

      if (response.imeges.length === 0) {
        toast.error("No more images to load!");
      }
    } catch (error) {
      toast.error(error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery item={images} onOpenModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {totalPages > page && <LoadMoreBtn onClick={loadMore} />}

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          image={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
