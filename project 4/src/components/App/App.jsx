import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { getPhotos } from "../../photos-api";

import { useState, useEffect } from "react";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    const getAllPhotos = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const result = await getPhotos(searchQuery, page);
        setPhotos((prevState) => [...prevState, ...result]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getAllPhotos();
  }, [searchQuery, page]);

  const handleSearch = (topic) => {
    setPhotos([]);
    setIsError(false);
    setSearchQuery(topic);
    setPage(1);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  const openImageModal = (imgUrl) => {
    setImgUrl(imgUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={openImageModal} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onIsClose={closeImageModal}
        ImageUrl={imgUrl}
      />
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleMore} isLoading={isLoading} />
      )}
      <Toaster position="top-right" />
    </>
  );
}
