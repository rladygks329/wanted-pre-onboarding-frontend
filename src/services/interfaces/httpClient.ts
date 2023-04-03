import TokenRepository from './tokenRepository';

interface HttpClient {
  baseURL: string;
  tokenRepo: TokenRepository;
  fetch: (baseURL: string, options: any) => Promise<Response>;
}

export default HttpClient;
