import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import { useSelector } from "react-redux";

const ListTodos = () => {
  const [data, setData] = useState([]);
  const baseUrl = useSelector((state) => state.baseUrl);
  const fetchTodos = async () => {
    try {
      const res = await fetch(`${baseUrl}/todos`);
      const fetchData = await res.json();
      setData(fetchData);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteATodo = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/delete-todo/${id}`, {
        method: "DELETE",
      });
      console.log(res);

      setData((val) => {
        return val?.filter((item) => {
          return item?.todo_id !== id;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item?.description}</td>
              <td>
                <EditTodo todo={item} />
              </td>
              <td>
                <button
                  className="btn btn-danger "
                  onClick={() => {
                    deleteATodo(item?.todo_id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
