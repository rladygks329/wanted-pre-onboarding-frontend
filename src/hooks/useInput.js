import { useCallback, useState } from 'react';

const useInput = (initialState) => {
  const [data, setData] = useState(initialState);
  const updateData = useCallback((event) => {
    setData(event.target.value);
  }, []);
  return [data, updateData, setData];
};

export default useInput;
