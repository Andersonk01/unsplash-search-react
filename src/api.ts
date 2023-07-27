const apiKey = import.meta.env.VITE_API_ACCESS_KEY;
// Definir tipos para os objetos retornados pela API
export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
}

interface UnsplashSearchResponse {
  results: UnsplashImage[];
}

const searchImagens = async (search: string): Promise<UnsplashImage[]> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${apiKey}`
  );
  if (!response.ok) throw new Error("Network erro");

  const data: UnsplashSearchResponse = await response.json();
  return data.results;
};
export default searchImagens;
