import "./App.css";
import { Fragment, useEffect } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import { useDispatch } from "react-redux";
import { setBaseUrl } from "./store/baseUrlSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBaseUrl("https://pern-todo-be.vercel.app"));
  }, [dispatch]);
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
