import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const emailPrompt = screen.getByTestId('email-input');
  expect(emailPrompt.placeholder).toEqual('이메일을 입력하세요');
});
