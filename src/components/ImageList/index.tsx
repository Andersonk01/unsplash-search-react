import { UnsplashImage } from "../../api";

interface ImageShowProps {
  image: UnsplashImage;
}

interface ImageListProps {
  images: UnsplashImage[];
}

const ImageShow = ({ image }: ImageShowProps): JSX.Element => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export const ImageList = ({ images }: ImageListProps): JSX.Element => {
  const renderImg = images.map((img: UnsplashImage) => {
    return <ImageShow key={img.id} image={img}></ImageShow>;
  });

  return <div>{renderImg}</div>;
};
