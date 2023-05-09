import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones';

describe('pruebas en 05-funciones', () => {
    test('get user debe retornar un objeto', () => {
        // 1     init test
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        // 2     estimulo
        const user = getUser();
        // 3     watch behavior
        expect(user).toEqual(userTest);
    });

    test('getusuarioActivo debe retornar un objeto', () => {
        // 1     init test
        const Fernando = {
            uid: 'ABC567',
            username: 'Fernando'
        };
        // 2     estimulo
        const activeUser = getUsuarioActivo('Fernando');
        // 3     watch behavior
        expect(Fernando).toEqual(activeUser);
    });
});