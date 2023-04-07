class TokenRepository {
  #TOKEN_KEY: string;
  storage: Storage;

  constructor(s: Storage, key: string) {
    this.storage = s;
    this.#TOKEN_KEY = key;
  }

  get() {
    return this.storage.getItem(this.#TOKEN_KEY) ?? '';
  }

  set(newToken: string) {
    this.storage.setItem(this.#TOKEN_KEY, newToken);
  }

  clear() {
    this.storage.clear();
  }
}

export default TokenRepository;
