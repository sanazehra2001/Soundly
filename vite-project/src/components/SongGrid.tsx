import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api_clients";
import SongCard from "./SongCard";

// import {songs} = useSongs();

interface Song {
  id: number;
  name: string;
}

interface FetchSongsResponse {
  count: number;
  results: Song[];
}

const SongGrid = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchSongsResponse>("/games")
      .then((res) => setSongs(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>{song.name}</li>
      ))}
    </ul>
    // <Box sx={{ flexGrow: 1 }} bgcolor="greenyellow">
    //   <Grid container spacing={2} columns={3}>
    //     {songs.map((song) => (
    //       <SongCard key={song.id} song={song.name} />
    //     ))}
    //   </Grid>
    // </Box>
  );
};

export default SongGrid;
