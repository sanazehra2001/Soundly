import React from "react";
import { Song } from "../hooks/useSongs";
import Card from "@mui/material/Card";
import Image from "mui-image";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";

import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import PlaylistRemoveRoundedIcon from "@mui/icons-material/PlaylistRemoveRounded";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import Forward10RoundedIcon from "@mui/icons-material/Forward10Rounded";
import Forward30RoundedIcon from "@mui/icons-material/Forward30Rounded";
import Replay10RoundedIcon from "@mui/icons-material/Replay10Rounded";
import Replay30RoundedIcon from "@mui/icons-material/Replay30Rounded";
import Typography from "@mui/material/Typography";

interface Props {
  song: Song;
}

const SongCard = ({ song }: Props) => {
  return (
    <Card variant="outlined">
      <Image src={song.background_image}></Image>
      <Typography variant="h6" color="inherit" component="div" padding={1.5}>
        {song.name}
      </Typography>
      <CardActionArea>
        <Stack>
          <PlayCircleOutlineRoundedIcon />
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default SongCard;
