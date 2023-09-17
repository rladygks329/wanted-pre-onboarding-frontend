import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { validateEmail, validatePassword } from '../utils/validation';
import { useAuth } from '../contexts/AuthContext';
import { FormEvent } from 'react';
import styled from 'styled-components';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, updateEmail] = useInput('');
  const [password, updatePassword] = useInput('');

  const { signIn } = useAuth();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signIn(email, password)
      .then(() => {
        navigate('/todo');
      })
      .catch((e: any) => {
        if (e.statusCode === 401) {
          alert('ID 또는 비밀번호를 확인 해주세요.');
        } else {
          alert(`error code : ${e.statusCode} ${e.message}`);
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H2>로그인</H2>
      <Input
        data-testid='email-input'
        type='text'
        placeholder='이메일을 입력하세요'
        name='email'
        value={email}
        onChange={updateEmail}
        title='@ 가 포함되어야 합니다.'
        pattern='.*@.*'
        required
      />
      {email.length !== 0 && !validateEmail(email) && (
        <Tooltip>@가 포함되어야합니다.</Tooltip>
      )}
      <Input
        data-testid='password-input'
        type='password'
        placeholder='비밀번호를 입력하세요'
        name='password'
        value={password}
        onChange={updatePassword}
        title='8자 이상이어야 합니다.'
        pattern='^.{8,}$'
        required
      />
      {password.length !== 0 && !validatePassword(password) && (
        <Tooltip>8자 이상이여야합니다. </Tooltip>
      )}
      <Button
        data-testid='signin-button'
        disabled={!(validateEmail(email) && validatePassword(password))}>
        submit
      </Button>
    </Form>
  );
};

const H2 = styled.h2`
  font-size: large;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.3rem;
  font-size: 1.5rem;
  margin: 0 0.2rem;
  border-radius: 0.5rem;
  :invalid {
    :placeholder-shown {
      outline: 2px solid black;
      border-radius: 5px;
    }
    background-color: ivory;
    border: none;
    outline: 2px solid red;
    border-radius: 5px;
  }
`;
const Tooltip = styled.div`
  color: #ed4337;
`;
const Button = styled.button`
  height: 1.5rem;
`;

export default SignInPage;
