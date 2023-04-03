interface TokenRepository {
  get: (key: string) => string;
  set: (key: string) => void;
  clear: () => void;
}

export default TokenRepository;
