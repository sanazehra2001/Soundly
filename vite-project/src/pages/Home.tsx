import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
// import Form from "../components/FormOld";
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

        <Box
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h1"
              color="white"
              padding={2.5}
              paddingBottom={0}
            >
              TuneFlow
            </Typography>
            <Typography variant="h5" color="#FCBCD7" padding={3.5}>
              Experience the rhythm of your life...
            </Typography>
          </Box>

          <Box
            paddingTop={5}
            paddingRight={2}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Box
              style={{
                border: "2px solid pink",
                borderRadius: "25px",
                borderColor: "#F5537C",
                padding: 25,
              }}
            >
              <Typography
                variant="h4"
                paddingTop={2}
                color="white"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "roboto",
                  fontWeight: 400,
                  letterSpacing: ".2rem",
                  textDecoration: "none",
                }}
              >
                SignUp or Login
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
