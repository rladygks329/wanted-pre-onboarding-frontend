import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/signin");
    }
  });
  return <div>todo</div>;
};
export default ToDo;
