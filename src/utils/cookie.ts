export const serializeCookie = (
  key: string,
  value: string,
  maxAge: number,
  secure: boolean
) => {
  const parts = [];

  parts.push(`${key}=${value}`);
  parts.push(`Max-Age=${maxAge}`);
  parts.push('Path=/');
  parts.push('HttpOnly');
  if (secure) {
    parts.push('Secure');
  }
  parts.push('SameSite=Strict');

  return parts.join('; ');
};
