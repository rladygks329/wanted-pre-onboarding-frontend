export const validateEmail = (email) => {
  const emailRegex = new RegExp('.*@.*');
  return emailRegex.test(email);
};
export const validatePassword = (password) => {
  const passwordRegex = new RegExp('^.{8,}$');
  return passwordRegex.test(password);
};
