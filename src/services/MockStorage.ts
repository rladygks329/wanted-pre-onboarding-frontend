class MockStorage implements Storage {
  private map: { [key: string]: string } = {};
  length: number;

  constructor() {
    this.length = 0;
  }

  getItem(key: string): string | null {
    return this.map[key];
  }

  setItem(key: string, value: string): void {
    this.length = this.map[key] ? this.length : this.length + 1;
    this.map[key] = value;

    return;
  }

  removeItem(key: string): void {
    delete this.map.key;
    this.length--;

    return;
  }

  clear(): void {
    this.map = {};
    this.length = 0;

    return;
  }

  key(index: number): string | null {
    return Object.keys(this.map)[index];
  }
}

export default MockStorage;
