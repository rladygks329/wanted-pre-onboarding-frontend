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
    if (!response.ok) {
      throw data;
    }
    this.tokenRepo.set(data.access_token);
    return;
  }

  async signUp(email: string, password: string) {
    const response = await this.httpClient.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    // 비어있으므로 ok가 아닐경우에만
    if (!response.ok) {
      const data = await response.json();
      throw data;
    }
    return;
  }

  async signOff(): Promise<void> {
    this.tokenRepo.clear();
    return;
  }
}

export default AuthServiceImpl;
