import formatTime from "./formatTime";

describe('Функция форматирования времени', () => {
  it('корректно форматирует время меньше минуты', () => {
    expect(formatTime(15)).toBe('00:15');
  });
 
  it('корректно форматирует время равное минуте', () => {
    expect(formatTime(60)).toBe('01:00');
  });

  it('корректно форматирует время больше минуты', () => {
    expect(formatTime(74)).toBe('01:14');
  });

  it('корректно форматирует большие временные отрезки', () => {
    expect(formatTime(8640)).toBe('24:00');
  });
 });