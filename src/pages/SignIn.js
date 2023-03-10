import loginService from '../services/loginService';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { ACCESS_TOKEN_KEY } from '../utils/constants';
import { validateEmail, validatePassword } from '../utils/validation';
const SignIn = () => {
  const navigate = useNavigate();
  const [email, updateEmail, setEmail] = useInput('');
  const [password, updatePassword, setPassword] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    loginService
      .login(email, password)
      .then((response) => {
        const token = response.data.access_token;
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
        setEmail('');
        setPassword('');
        navigate('/todo');
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignIn</h1>
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
        data-testid='signin-button'
        disabled={!(validateEmail(email) && validatePassword(password))}>
        submit
      </button>
    </form>
  );
};

export default SignIn;
