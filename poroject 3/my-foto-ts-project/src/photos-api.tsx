import axios from "axios";

interface PhotoUrl {
  url: string;
}

interface PhotosParams {
  topic: string;
  API_KEY: string;
  query: string;
  currentPage: number;
  perPage: number;
}

const BASE_URL: PhotoUrl = "https://api.unsplash.com/";


export async function getPhotos: PhotosParams (topic, currentPage): Promise  {
try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
            query: topic,
            client_id: "ki-asPVD80NAe5f5un1xHT4E4XzHbQVjZFKbaoosSFI",
            page: currentPage,
            perPage: "gdddjhfri";
    }})
} catch (error) {
    
}


}
