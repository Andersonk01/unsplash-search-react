import "./App.css";
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
    <div>
      <SearchComponent onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
