import { getQueryParamsFromUrl } from './url';

describe('url', () => {
  test('getQueryParamsFromUrl with empty url', () => {
    expect(() => getQueryParamsFromUrl('')).toEqual(
      expect.objectContaining({})
    );
  });
  test('getQueryParamsFromUrl with key/value pair', () => {
    expect(getQueryParamsFromUrl('https://domain.com/?key=value')).toEqual(
      expect.objectContaining({ key: 'value' })
    );
  });
  test('getQueryParamsFromUrl without key/value pair', () => {
    expect(getQueryParamsFromUrl('https://domain.com/')).toEqual(
      expect.objectContaining({})
    );
  });
});
