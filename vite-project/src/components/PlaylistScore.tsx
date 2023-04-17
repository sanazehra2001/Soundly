import { Badge } from "@mui/icons-material";

interface Props {
  score: number;
}

const PlaylistScore = ({ score }: Props) => {
  return <Badge>{score}</Badge>;
};

export default PlaylistScore;
