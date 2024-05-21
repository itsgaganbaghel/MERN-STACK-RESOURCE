import React, { useState } from "react";
import { useForm } from "react-hook-form";
const InputContainer1 = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleForm = (data) => {
    console.log(data);
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="email" placeholder="email" />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default InputContainer1;
