import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('pruebas en 07-deses-arr', () => {
    test('debe de retornar un string y un numero', () => {
        // 1     init test
        // const arr = ['ABC', 123];
        const [letters, numbers] = retornaArreglo();
        // 2     estimulo
        // const desArr = retornaArreglo();
        // 3     watch behavior
        // expect(typeof desArr).toBe('object');
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        // expect(desArr.length).toBe(2);
        // expect(desArr).toEqual(arr);
    });
});