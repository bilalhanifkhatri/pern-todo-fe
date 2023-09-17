import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const baseUrl = useSelector((state) => state.baseUrl);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`${baseUrl}/create-todo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5 ">PERN Todo App</h1>
      <form onSubmit={handleSubmit} className="d-flex mt-5">
        <input
          type="text"
          className="form-control "
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-success ">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
