import React from "react";

const ImageGallery: React.FC = ({ photos }) => {
  return (
    <>
      <ul>
        {photos.map((photo) => {
          <li key={photo.id}>
            <ImageCard photo={photo} />
          </li>;
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
