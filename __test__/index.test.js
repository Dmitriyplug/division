import { division } from "/division.js";

test("division", () => {
    // Обычное деление
    expect(division(10, 2)).toEqual(5);
    expect(division(8, 4)).toEqual(2);
    expect(division(15, 3)).toEqual(5);

    // Деление на 1
    expect(division(5, 1)).toEqual(5);
    expect(division(-5, 1)).toEqual(-5);

    // Деление на 0
    expect(() => division(10, 0)).toThrow(Error); // ожидание ошибки
    expect(() => division(0, 0)).toThrow(Error);
});
