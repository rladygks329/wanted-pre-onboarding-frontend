import HttpClient from './interfaces/HttpClient';
import LoginService from './interfaces/AuthService';
import TokenRepository from './TokenRepository';

class LoginServiceImpl implements LoginService {
  tokenRepo: TokenRepository;
  httpClient: HttpClient;

  constructor(repo: TokenRepository, http: HttpClient) {
    this.httpClient = http;
    this.tokenRepo = repo;
  }

  async login(email: string, password: string) {
    const response = await this.httpClient.fetch('auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    this.tokenRepo.set(data.access_token);
    return;
  }

  async signup(email: string, password: string) {
    const response = await this.httpClient.fetch('auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.status !== 201) {
      throw response;
    }

    return;
  }
}

export default LoginServiceImpl;
