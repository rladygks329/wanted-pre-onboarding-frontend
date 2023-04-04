import TokenRepository from './interfaces/tokenRepository';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

class LocalTokenRepository implements TokenRepository {
  #TOKEN_KEY = ACCESS_TOKEN_KEY;

  get() {
    return localStorage.getItem(this.#TOKEN_KEY) ?? '';
  }

  set(newToken: string) {
    localStorage.setItem(this.#TOKEN_KEY, newToken);
  }

  clear() {
    localStorage.clear();
  }
}

export default LocalTokenRepository;
