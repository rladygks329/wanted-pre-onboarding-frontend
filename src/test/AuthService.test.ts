import HttpClientImpl from '../services/HttpClientImpl';
import LoginServiceImpl from '../services/AuthServiceImpl';
import MockStorage from '../services/MockStorage';
import TokenRepository from '../services/TokenRepository';
import { BASE_URL } from '../utils/constants';
test('AuthService', async () => {
  const TOKEN_KEY = 'ACCESS_TOKEN';
  const baseURL = BASE_URL;

  const mockStorage = new MockStorage();
  const tokenRepo = new TokenRepository(mockStorage, TOKEN_KEY);
  const httpClient = new HttpClientImpl(baseURL, tokenRepo);

  const loginService = new LoginServiceImpl(tokenRepo, httpClient);

  await loginService.signIn('1234@aaa10', '111111119');

  let token = tokenRepo.get();
  expect(token).not.toBe('');
});
