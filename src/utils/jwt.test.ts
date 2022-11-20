import {
  extractDataFromToken,
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from './jwt';

describe('jwt', () => {
  test('extractDataFromToken', () => {
    const token = generateAccessToken(
      process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY,
      { greeting: 'hello, world' }
    );

    expect(extractDataFromToken(token)).toEqual(
      expect.objectContaining({ greeting: 'hello, world' })
    );
  });
  test('generateAccessToken', () => {
    expect(
      generateAccessToken(process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY, {
        greeting: 'hello, world',
      })
    ).toBeTruthy();
  });
  test('verifyAccessToken', () => {
    const token = generateAccessToken(
      process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY,
      { greeting: 'hello, world' }
    );

    expect(
      verifyAccessToken(process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY, token)
    ).toBeTruthy();
  });
  test('fail to verifyAccessToken', () => {
    expect(
      verifyAccessToken(process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY, 'test')
    ).toBeFalsy();
  });
  test('generateRefreshToken', () => {
    expect(
      generateRefreshToken(process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY, {
        greeting: 'hello, world',
      })
    ).toBeTruthy();
  });
  test('verifyRefreshToken', () => {
    const token = generateRefreshToken(
      process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
      {
        greeting: 'hello, world',
      }
    );

    expect(
      verifyRefreshToken(process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY, token)
    ).toBeTruthy();
  });
  test('fail to verifyRefreshToken', () => {
    expect(
      verifyRefreshToken(process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY, 'test')
    ).toBeFalsy();
  });
});
