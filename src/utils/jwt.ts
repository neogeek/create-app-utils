import jwt from 'jsonwebtoken';

export const extractDataFromToken = (token: string) => jwt.decode(token);

export const generateAccessToken = (
  privateKey: string,
  data: string | object | Buffer,
  expiresIn = '15 minutes'
) =>
  jwt.sign(data, Buffer.from(privateKey, 'base64').toString('ascii'), {
    algorithm: 'RS512',
    expiresIn,
  });

export const verifyAccessToken = (publicKey: string, token: string) => {
  try {
    jwt.verify(token, Buffer.from(publicKey, 'base64').toString('ascii'));
    return true;
  } catch {
    return false;
  }
};

export const generateRefreshToken = (
  privateKey: string,
  data: string | object | Buffer
) =>
  jwt.sign(data, Buffer.from(privateKey, 'base64').toString('ascii'), {
    algorithm: 'RS512',
  });

export const verifyRefreshToken = (publicKey: string, token: string) => {
  try {
    jwt.verify(token, Buffer.from(publicKey, 'base64').toString('ascii'));
    return true;
  } catch {
    return false;
  }
};
