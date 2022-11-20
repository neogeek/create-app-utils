import { generateExpireAtDate } from './date';

describe('date', () => {
  test('generateExpireAtDate', () => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

    expect(generateExpireAtDate()).not.toEqual(new Date().getDate());
  });
});
