interface TokenRepository {
  get(): string;
  set(token: string): void;
  clear(): void;
}

export default TokenRepository;
