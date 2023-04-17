import { useEffect, useState } from "react";
import apiClient from "../services/api_clients";
import { CanceledError } from "axios";

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
        const controller = new AbortController();
      apiClient
        .get<FetchSongsResponse>("/games", {signal: controller.signal})
        .then((res) => setSongs(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});

        return () => controller.abort();
    }, []);

    return {songs, error}
  
}

export default useSongs;