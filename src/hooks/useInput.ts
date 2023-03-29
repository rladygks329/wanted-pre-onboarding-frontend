import { useState } from 'react';

const useInput = (initialState: String) => {
  const [data, setData] = useState(initialState);

  const updateData = (event: InputEvent) => {
    const { value } = event.target as HTMLInputElement;
    setData(value);
  };

  return [data, updateData];
};

export default useInput;
