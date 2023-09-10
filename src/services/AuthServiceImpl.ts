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

  async signIn(email: string, password: string) {
    const response = await this.httpClient.fetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    this.tokenRepo.set(data.access_token);

    return;
  }

  async signUp(email: string, password: string) {
    await this.httpClient.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    return;
  }

  async signOff(): Promise<void> {
    this.tokenRepo.clear();
    return;
  }
}

export default AuthServiceImpl;
