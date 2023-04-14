import { useState } from 'react';

const useToggle = (initialState: boolean) => {
  const [data, setData] = useState(initialState);

  const toggleData = () => {
    setData(!data);
  };

  return { data, toggleData };
};

export default useToggle;
