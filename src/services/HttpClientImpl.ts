import HttpClient from './interfaces/HttpClient';
import TokenRepository from './TokenRepository';

class HttpClientImpl implements HttpClient {
  baseURL: string;
  tokenRepo: TokenRepository;

  constructor(baseURL: string, tokenRepo: TokenRepository) {
    this.baseURL = baseURL;
    this.tokenRepo = tokenRepo;
  }

  fetch(endPoint: string, options: any) {
    return window.fetch(`${this.baseURL}${endPoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.tokenRepo.get(),
        ...options.headers,
      },
    });
  }
}

export default HttpClientImpl;
