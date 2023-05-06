import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import "../form.css";

const schema = z.object({
  uname: z
    .string()
    .min(3, { message: "Username must be atleast 3 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
