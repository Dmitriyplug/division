import {division} from "/division.js";

test("division", ()=>{
    // Обычное деление
    expect(division(10, 2)).toEqual(5);
    expect(division(20, 4)).toEqual(5);
    expect(division(15, 3)).toEqual(5);
    
    // Деление с отрицательными числами
    expect(division(-10, 2)).toEqual(-5);
    expect(division(10, -2)).toEqual(-5);
    expect(division(-10, -2)).toEqual(5);
    
    // Деление с дробными результатами
    expect(division(7, 2)).toEqual(3.5);
    expect(division(10, 3)).toBeCloseTo(3.3333333333);
    
    // Деление на 1
    expect(division(5, 1)).toEqual(5);
    expect(division(-5, 1)).toEqual(-5);
    
    // Деление нуля
    expect(division(0, 5)).toEqual(0);
    
    // Деление на ноль (должно выбрасывать ошибку)
    expect(() => division(10, 0)).toThrow();
    expect(() => division(0, 0)).toThrow();
    
    // Деление, где результат - отрицательный ноль (должен быть 0)
    expect(division(0, -5)).toEqual(0);
});