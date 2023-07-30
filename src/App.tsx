import { SearchComponent } from "./components/Search";

import { useState } from "react";
import { ImageList } from "./components/ImageList";
import searchImages, { UnsplashImage } from "./api";

function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  const handleSubmit = async (search: string): Promise<void> => {
    const result: UnsplashImage[] = await searchImages(search);

    setImages(result);
  };

  return (
    <>
      <SearchComponent onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
