import HttpClient from './interfaces/HttpClient';
import LoginService from './interfaces/LoginService';
import TokenRepository from './TokenRepository';

class LoginServiceImpl implements LoginService {
  tokenRepo: TokenRepository;
  httpClient: HttpClient;

  constructor(repo: TokenRepository, http: HttpClient) {
    this.httpClient = http;
    this.tokenRepo = repo;
  }

  async login() {
    // todo
    const response = await this.httpClient.fetch('/signin', {});
    console.log(response);
    return;
  }

  async signup() {
    // todo
    const response = await this.httpClient.fetch('/signin', {});
    console.log(response);
    return;
  }
}

export default LoginServiceImpl;
