import { ChangeEvent, useState } from 'react';

const useInput = (initialState: string) => {
  const [data, setData] = useState(initialState);

  const updateData = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setData(value);
  };

  const resetInput = () => {
    setData('');
  };

  return { data, updateData, resetInput };
};

export default useInput;
