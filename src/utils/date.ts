export const generateExpireAtDate = (daysFromNow = 5) => {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + daysFromNow);

  return expiresAt;
};

export const normalizeDates = <T>(obj: T): T => {
  return Object.fromEntries(
    Object.entries(obj as object).map(([key, value]) => {
      if (typeof value === 'object' && value instanceof Date) {
        return [key, value.toISOString()];
      }

      return [key, value];
    })
  ) as T;
};
