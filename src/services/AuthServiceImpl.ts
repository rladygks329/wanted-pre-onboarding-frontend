import HttpClient from '../types/HttpClient';
import LoginService from '../types/AuthService';
import TokenRepository from './TokenRepository';

class AuthServiceImpl implements LoginService {
  tokenRepo: TokenRepository;
  httpClient: HttpClient;

  constructor(repo: TokenRepository, http: HttpClient) {
    this.httpClient = http;
    this.tokenRepo = repo;
  }

  async signin(email: string, password: string) {
    const data = await this.httpClient.fetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    this.tokenRepo.set(data.access_token);

    return;
  }

  async signup(email: string, password: string) {
    await this.httpClient.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    return;
  }
}

export default AuthServiceImpl;
