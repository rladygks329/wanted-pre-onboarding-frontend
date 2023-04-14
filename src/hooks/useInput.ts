import { ChangeEvent, useState } from 'react';

const useInput = (initialState: string) => {
  const [data, setData] = useState(initialState);

  const updateData = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setData(value);
  };

  return { data, updateData };
};

export default useInput;
