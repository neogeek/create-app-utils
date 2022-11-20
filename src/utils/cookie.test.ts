import { serializeCookie } from './cookie';

describe('cookie', () => {
  test('serialize', () => {
    expect(serializeCookie('key', 'value', 0, false)).toBe(
      'key=value; Max-Age=0; Path=/; HttpOnly; SameSite=Strict'
    );
  });
  test('serialize secure', () => {
    expect(serializeCookie('key', 'value', 0, true)).toBe(
      'key=value; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict'
    );
  });
});
