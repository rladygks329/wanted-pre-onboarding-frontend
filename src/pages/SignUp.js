import { useState } from "react";

const SignUp = () => {
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
