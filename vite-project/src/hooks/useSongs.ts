import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Song {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
}
  
const useSongs = () => useData<Song>('/games');

export default useSongs;