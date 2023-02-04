import { useState } from "react";
import loginService from "../services/loginService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginService
      .signup(signUpData.email, signUpData.password)
      .then((response) => {
        navigate("/signin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="email-input"
        type="text"
        placeholder="이메일을 입력하세요"
        name="email"
        value={signUpData.email}
        onChange={handleChange}
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="비밀번호를 입력하세요"
        name="password"
        value={signUpData.password}
        onChange={handleChange}
      />
      <button
        data-testid="signup-button"
        disabled={
          !(signUpData.email.includes("@") && signUpData.password.length > 7)
        }
      >
        submit
      </button>
    </form>
  );
};

export default SignUp;
