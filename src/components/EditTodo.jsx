import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

const EditTodo = ({ todo }) => {
  const [input, setInput] = useState(todo?.description || "");
  const baseUrl = useSelector((state) => state.baseUrl);
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    await fetch(`${baseUrl}/update-todo/${todo?.todo_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: input,
      }),
    });
    window.location = "/";
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Edit
      </button>
      <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={handleSaveChanges}>
              <div className="modal-header">
                <h5 className="modal-title">Edit Data</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-warning">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
