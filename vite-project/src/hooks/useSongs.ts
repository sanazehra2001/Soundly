import { useEffect, useState } from "react";
import apiClient from "../services/api_clients";

interface Song {
    id: number;
    name: string;
  }

interface FetchSongsResponse {
    count: number;
    results: Song[];
}
  
const useSongs = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<FetchSongsResponse>("/games")
        .then((res) => setSongs(res.data.results))
        .catch((err) => setError(err.message));
    });

    return {songs, error}
  
}

export default useSongs;