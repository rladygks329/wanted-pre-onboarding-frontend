import { useState, useEffect } from 'react';
import loginService from '../services/loginService';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token !== null) {
      navigate('/todo');
    }
  });

  const [SignInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setSignInData({
      ...SignInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginService
      .login(SignInData.email, SignInData.password)
      .then((response) => {
        const token = response.data.access_token;
        localStorage.setItem('access_token', token);
        navigate('/todo');
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid='email-input'
        type='text'
        placeholder='이메일을 입력하세요'
        name='email'
        value={SignInData.email}
        onChange={handleChange}
      />
      <input
        data-testid='password-input'
        type='password'
        placeholder='비밀번호를 입력하세요'
        name='password'
        value={SignInData.password}
        onChange={handleChange}
      />
      <button
        data-testid='signin-button'
        disabled={
          !(SignInData.email.includes('@') && SignInData.password.length > 7)
        }>
        submit
      </button>
    </form>
  );
};

export default SignIn;
