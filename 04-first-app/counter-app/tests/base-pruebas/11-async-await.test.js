import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('test en 11 async', () => {
    test('must return an image url', async() => {
        const url = await getImagen()
        console.log(url);
        expect(typeof url).toBe('string');
    })
});