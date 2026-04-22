import {division} from "/division.js";

test("division", ()=>{
    expect(division(10, 2)).toEqual(5);
    expect(division(20, 4)).toEqual(5);
    expect(division(15, 3)).toEqual(5);

    expect(division(-10, 2)).toEqual(-5);
    expect(division(10, -2)).toEqual(-5);
    expect(division(-10, -2)).toEqual(5);

    expect(division(5, 1)).toEqual(5);
    expect(division(0, 5)).toEqual(0);  // 0 делить на 5 равно 0
});