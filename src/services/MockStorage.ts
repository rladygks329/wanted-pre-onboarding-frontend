class MockStorage implements Storage {
  length: number;

  constructor() {
    this.length = 0;
  }

  getItem(key: string): string | null {
    return '1';
  }

  setItem(key: string, value: string): void {}

  removeItem(key: string): void {
    return;
  }

  clear(): void {
    return;
  }

  key(index: number): string | null {
    return '1';
  }
}

export default MockStorage;
