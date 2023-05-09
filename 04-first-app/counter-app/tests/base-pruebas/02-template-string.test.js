import {getSaludo} from '../../src/base-pruebas/02-template-string';

describe('tests on 02-template-string', () => {
    test('getSaludo must return Hola + name', () => {
        // 1     init test
        const name = 'Fernando';
        // 2     estimulo
        const saludo = getSaludo(name);
        // 3     watch behavior
        expect(saludo).toBe('Hola ' + name);
    });
});