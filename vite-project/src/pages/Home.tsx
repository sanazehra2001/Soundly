import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

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

        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h1" color="white" padding={1.5}>
              TuneFlow
            </Typography>
            <Typography variant="h5" color="#FCBCD7" padding={3.5}>
              Experience the rhythm of your life...
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingRight={1}
            paddingTop={5}
          >
            <Box
              style={{
                border: "4px solid #F5537C",
                borderRadius: 15,
              }}
            >
              <Typography
                variant="h5"
                color="white"
                padding={2}
                paddingBottom={0}
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "roboto",
                  fontWeight: 400,
                  letterSpacing: ".2rem",
                  textDecoration: "none",
                }}
              >
                Sign Up or Login
              </Typography>
              <Form />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
