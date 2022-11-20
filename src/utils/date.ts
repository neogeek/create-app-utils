export const generateExpireAtDate = (daysFromNow = 5) => {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + daysFromNow);

  return expiresAt;
};
