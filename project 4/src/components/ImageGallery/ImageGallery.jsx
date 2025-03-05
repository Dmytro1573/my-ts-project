import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <ImageCard photo={photo} onImgClick={onImageClick} />
          </li>
        ))}
      </ul>
    </>
  );
}
