import HttpClientImpl from '../services/HttpClientImpl';
import LoginServiceImpl from '../services/AuthServiceImpl';
import MockStorage from '../services/MockStorage';
import TokenRepository from '../services/TokenRepository';

test('AuthService', async () => {
  const TOKEN_KEY = 'ACCESS_TOKEN';
  const baseURL = 'https://www.pre-onboarding-selection-task.shop/';

  const mockStorage = new MockStorage();
  const tokenRepo = new TokenRepository(mockStorage, TOKEN_KEY);
  const httpClient = new HttpClientImpl(baseURL, tokenRepo);

  const loginService = new LoginServiceImpl(tokenRepo, httpClient);

  await loginService.login('1234@aaa10', '111111119');

  let token = tokenRepo.get();
  expect(token).not.toBe('');
});
