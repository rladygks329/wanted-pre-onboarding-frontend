import loginService from '../services/loginService';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, updateEmail, setEmail] = useInput('');
  const [password, updatePassword, setPassword] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    loginService
      .signup(email, password)
      .then((response) => {
        navigate('/signin');
        setEmail('');
        setPassword('');
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <input
        data-testid='email-input'
        type='text'
        placeholder='이메일을 입력하세요'
        name='email'
        value={email}
        onChange={updateEmail}
      />
      <input
        data-testid='password-input'
        type='password'
        placeholder='비밀번호를 입력하세요'
        name='password'
        value={password}
        onChange={updatePassword}
      />
      <button
        data-testid='signup-button'
        disabled={!(email.includes('@') && password.length > 7)}>
        submit
      </button>
    </form>
  );
};

export default SignUp;
