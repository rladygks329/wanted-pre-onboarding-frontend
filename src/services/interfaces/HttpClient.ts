import TokenRepository from '../TokenRepository';

interface HttpClient {
  baseURL: string;
  tokenRepo: TokenRepository;
  fetch: (endPoint: string, options: any) => Promise<Response>;
}

export default HttpClient;
