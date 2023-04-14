import { ChangeEvent, useState } from 'react';

const useToggle = (initialState: boolean) => {
  const [data, setData] = useState(initialState);

  const toggleData = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setData(!value);
  };

  return { data, toggleData };
};

export default useToggle;
