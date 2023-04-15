export const getDayOfWeek = () => {
  const today = new Date();
  const week = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ];
  return week[today.getUTCDay() - 1];
};
