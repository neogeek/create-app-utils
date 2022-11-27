import { generateExpireAtDate, normalizeDates } from './date';

describe('date', () => {
  test('generateExpireAtDate', () => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

    expect(generateExpireAtDate()).not.toEqual(new Date().getDate());
  });
  test('normalize dates', () => {
    const data = {
      userId: 1,
      createdAt: new Date(),
    };

    const convertedData = normalizeDates(data);

    expect(typeof convertedData.createdAt).toBe('string');
  });
});
