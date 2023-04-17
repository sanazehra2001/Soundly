import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LibraryMusicRoundedIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Soundly
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
