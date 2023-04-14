import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { validateEmail, validatePassword } from '../utils/validation';
import { useAuth } from '../contexts/AuthContext';
import { FormEvent } from 'react';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { data: email, updateData: updateEmail } = useInput('');
  const { data: password, updateData: updatePassword } = useInput('');
  const { signup } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signup(email, password).then(() => {
      navigate('/signin');
    });
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
        disabled={!(validateEmail(email) && validatePassword(password))}>
        submit
      </button>
    </form>
  );
};

export default SignUpPage;
