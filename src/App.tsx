import { useState, useEffect } from "react";
import "./App.css";
import { getPhotosFromUnsplash } from "./components/getPhotos";
import SearchBar from "./components/SearchBar/SearchBar";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import ImageModal from "./components/ImageModal/ImageModal";
import { IPhoto } from "./types/photo";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";

export interface IUnsplashResponse {
  total: number;
  total_pages: number;
  results: IPhoto[];
}

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [visibleBtnMore, setVisibleBtnMore] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleSearchQuery = (valueInput: string): void => {
    if (valueInput.trim() === "") {
      setLoader(true);
      return;
    }
    if (valueInput !== query.split(`/`)[0]) {
      setPhotos([]);
    }

    setQuery(`${valueInput}/${Date.now()}`);
    setPage(1);
    setPhotos([]);
  };
  useEffect(() => {
    if (query.split(`/`)[0] === "") {
      return;
    }
    const getPhotos = async (): Promise<void> => {
      try {
        setError(false);
        setLoader(true);
        const fetchData: IUnsplashResponse = await getPhotosFromUnsplash(
          query.split(`/`)[0],
          page
        );

        const data: IPhoto[] = fetchData.results;

        setPhotos((firstGalleryPhotos) => {
          return [...firstGalleryPhotos, ...data];
        });

        if (fetchData.total_pages > 1) {
          setVisibleBtnMore(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getPhotos();
  }, [page, query]);

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchQuery} />
      {error && <ErrorMessage />}

      <ImageGallery items={photos} onImageClick={openModal} />
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      >
        {selectedImage !== "" && (
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%" }}
          />
        )}
      </ImageModal>

      {loader && <Loader />}

      {visibleBtnMore && !loader && (
        <LoadMoreBtn
          onClick={() => {
            setPage(page + 1);
          }}
        />
      )}
    </>
  );
}

export default App;