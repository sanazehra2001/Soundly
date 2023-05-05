// React imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Navbar from "../components/Navbar";

// Assets
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Navbar />
        <Typography variant="h1" color="white" padding={1.5}>
          Soundly
        </Typography>
        <Typography variant="h4" color="white" padding={1.5}>
          Stream your favourite music
        </Typography>
      </Box>
    </>
  );
};

export default Home;
