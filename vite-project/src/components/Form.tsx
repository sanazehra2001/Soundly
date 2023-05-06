import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const Form = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      padding={2.5}
      sx={{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#FCBCD7",
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#F5537C",
          },

        "& label": {
          color: "#FFDCE7",
        },

        "& label.Mui-focused": {
          color: "#FFF6F6",
        },

        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#FE7F9B",
            borderWidth: "0.15rem",
          },
        },

        "& .MuiIconButton-root": {
          color: "#FFDCE7",
        },

        input: { color: "white" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {/* Username Input */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput required id="outlined-helperText" label="Username" />
        </FormControl>

        {/* Password Input */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div>
        <Button
          style={{
            borderRadius: 5,
            backgroundColor: "#F5537C",
          }}
          sx={{ m: 1, width: "27ch" }}
          variant="contained"
          color="secondary"
        >
          Sign Up
        </Button>

        <Button
          style={{
            borderRadius: 5,
            backgroundColor: "#F5537C",
          }}
          sx={{ m: 1, width: "27ch" }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Form;
