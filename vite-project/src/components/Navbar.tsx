import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Image
            src={logo}
            height={40}
            width={40}
            fit="contain"
            bgColor="inherit"
            aria-label="menu"
          ></Image>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            padding={1.5}
          >
            Soundly
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
