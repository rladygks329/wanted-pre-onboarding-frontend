import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { validateEmail, validatePassword } from '../utils/validation';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Assignment 1', () => {
  test('signin', () => {
    render(<SignIn />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const btn = screen.getByTestId('signin-button');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput.tagName).toBe('INPUT');
    expect(passwordInput.tagName).toBe('INPUT');

    //둘다 틀린 경우
    fireEvent.change(emailInput, { target: { value: '1234.com' } });
    fireEvent.change(passwordInput, { target: { value: '1111111' } });
    expect(btn).toHaveAttribute('disabled');

    //email만 맞은 경우
    fireEvent.change(emailInput, { target: { value: '1234@' } });
    fireEvent.change(passwordInput, { target: { value: '1' } });
    expect(btn).toHaveAttribute('disabled');

    //password만 맞은 경우
    fireEvent.change(emailInput, { target: { value: '1234.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345789' } });
    expect(btn).toHaveAttribute('disabled');

    //둘다 맞은 경우
    fireEvent.change(emailInput, { target: { value: '1234@com' } });
    fireEvent.change(passwordInput, {
      target: { value: '12345789' },
    });
    expect(btn.disabled).toBeFalsy();
  });

  it('signup', () => {
    render(<SignUp />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const btn = screen.getByTestId('signup-button');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput.tagName).toBe('INPUT');
    expect(passwordInput.tagName).toBe('INPUT');

    //둘다 틀린 경우
    fireEvent.change(emailInput, { target: { value: '1234.com' } });
    fireEvent.change(passwordInput, { target: { value: '1111111' } });
    expect(btn).toHaveAttribute('disabled');

    //email만 맞은 경우
    fireEvent.change(emailInput, { target: { value: '1234@' } });
    fireEvent.change(passwordInput, { target: { value: '1' } });
    expect(btn).toHaveAttribute('disabled');

    //password만 맞은 경우
    fireEvent.change(emailInput, { target: { value: '1234.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345789' } });
    expect(btn).toHaveAttribute('disabled');

    //둘다 맞은 경우
    fireEvent.change(emailInput, { target: { value: '1234@com' } });
    fireEvent.change(passwordInput, {
      target: { value: '12345789' },
    });
    expect(btn.disabled).toBeFalsy();
  });

  it('Test validate', () => {
    const invalidEmail = '1234.com';
    expect(validateEmail(invalidEmail)).toBeFalsy();

    const validEmail = '1234@naver.com';
    expect(validateEmail(validEmail)).toBeTruthy();

    const invalidPassword = '1234567';
    expect(validatePassword(invalidPassword)).toBeFalsy();

    const validPassword = '1234@naver.com';
    expect(validatePassword(validPassword)).toBeTruthy();
  });
});
