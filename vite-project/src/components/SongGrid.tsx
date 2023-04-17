import { Typography } from "@mui/material";
import useSongs from "../hooks/useSongs";

const SongGrid = () => {
  const { songs, error } = useSongs();

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SongGrid;
