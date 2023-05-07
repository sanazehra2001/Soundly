// React Imports
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

// Zod Imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// MaterialUI Imports
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

// CSS Imports
import "../form.css";

interface Props {
  onSubmit: (data: FormData) => void;
}

// Zod Schema Validation
const schema = z.object({
  uname: z
    .string()
    .min(5, { message: "Username must be atleast 5 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters." }),
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Interface for form data
type FormData = z.infer<typeof schema>;

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="uname" className="form-label">
          Username
        </label>
        <input
          {...register("uname")}
          id="uname"
          type="text"
          className="form-control"
          placeholder="Username"
        />
        {errors.uname && <p className="form-label">{errors.uname.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className="form-control"
          placeholder="********"
        />
        {errors.password && (
          <p className="form-label">{errors.password.message}</p>
        )}
      </div>

      <Button
        id="sign-up"
        variant="contained"
        type="submit"
        sx={{ m: 1, width: "27ch" }}
        style={{
          borderRadius: 5,
          backgroundColor: "#F5537C",
        }}
      >
        Signup
      </Button>

      <Button
        id="login"
        variant="contained"
        type="submit"
        sx={{ m: 1, width: "27ch" }}
        style={{
          borderRadius: 5,
          backgroundColor: "#F5537C",
        }}
      >
        Login
      </Button>
    </form>
  );
};

export default Form;
