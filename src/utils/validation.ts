export const validateEmail = (email: string) => {
  const emailRegex = new RegExp('.*@.*');
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  const passwordRegex = new RegExp('^.{8,}$');
  return passwordRegex.test(password);
};
