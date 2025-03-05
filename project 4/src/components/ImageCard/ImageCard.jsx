

export default function ImageCard({ photo, onImgClick }) {
  return (
    <>
      <div>
        <img
          src={photo.urls.small}
          alt={photo.slug}
          onClick={() => onImgClick(photo.urls.small)}
        />
      </div>
    </>
  );
}
