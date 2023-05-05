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
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { CardContent, CardMedia } from "@mui/material";
import PlaylistScore from "./PlaylistScore";
import Like from "./Like";

interface Props {
  song: Song;
}

const SongCard = ({ song }: Props) => {
  return (
    <Card variant="outlined">
      <CardMedia src={song.background_image} component="img"></CardMedia>

      <Typography variant="h6" color="inherit" component="div" padding={1.5}>
        {song.name}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <PlayCircleOutlineRoundedIcon />
      </Box>
    </Card>
  );
};

export default SongCard;

//return (
// <Card sx={{ display: 'flex' }}>
//   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//     <CardContent sx={{ flex: '1 0 auto' }}>
//       <Typography component="div" variant="h5">
//         Live From Space
//       </Typography>
//       <Typography variant="subtitle1" color="text.secondary" component="div">
//         Mac Miller
//       </Typography>
//     </CardContent>
//     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//       <IconButton aria-label="previous">
//         {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//       </IconButton>
//       <IconButton aria-label="play/pause">
//         <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//       </IconButton>
//       <IconButton aria-label="next">
//         {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//       </IconButton>
//     </Box>
//   </Box>
//   <CardMedia
//     component="img"
//     sx={{ width: 151 }}
//     image="/static/images/cards/live-from-space.jpg"
//     alt="Live from space album cover"
//   />
// </Card>
// );
