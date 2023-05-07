import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SongGrid from "../components/SongGrid";
import Navbar from "../components/Navbar";
import GenreList from "../components/GenreList";

const Feed = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, lg: 2 }}
          columns={{ xs: 1, md: 4, lg: 4 }}
        >
          <Grid item xs={12}>
            <Navbar />
          </Grid>

          <Grid item xs={0} md={1}>
            <Box
              component={Grid}
              item
              xs={0}
              display={{ xs: "none", md: "block" }}
            >
              <GenreList />
            </Box>
          </Grid>

          <Grid item xs={1} md={3}>
            <SongGrid />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Feed;
