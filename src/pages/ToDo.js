import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import todoService from "../services/todoService";

const ToDo = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/signin");
    }
    todoService.getTodos().then((response) => {
      setData(response.data);
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    todoService.createTodo(content).then((response) => {
      console.log(response);
    });
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>todo</div>
        <input onChange={handleChange} />
        <button>만들기</button>
      </form>
      {data.map((todoItem) => {
        return <TodoList key={todoItem.id} data={todoItem} />;
      })}
    </div>
  );
};
export default ToDo;
