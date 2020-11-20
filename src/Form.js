import { json } from "express";
import React from "react";
import { useForm } from "react-hook-form";
import instance from "./axios";

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    //   data = JSON.parse(data)
    // instance
    //   .post("/SendingEmail", {
    //     data,
    //   })
    //   .then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    console.log(data)
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>From</label>
        <input name="From" ref={register} type="text" placeholder="From..." />

        <label>To</label>
        <input
          name="To"
          ref={register}
          type="text"
          placeholder="someone@gmail.com"
        />

        <label>Title</label>
        <input name="Title" ref={register} type="text" placeholder="Title..." />

        <label>Content</label>
        <textarea
          name="Content"
          ref={register}
          placeholder="Text here..."
        ></textarea>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
