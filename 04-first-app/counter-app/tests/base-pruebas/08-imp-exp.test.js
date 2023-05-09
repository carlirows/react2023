import  heroes  from '../../src/data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('pruebas en -8 imp exp', () => {
    test('must return an heroe from an ID', () => {
        // 1     init test
        const id = 1;
        // 2     estimulo
        const heroe = getHeroeById(id);
        // 3     watch behavior
        expect(heroe).toEqual(heroes[0]);
    });
    test('must return a hero from an owner', () => {
        // 1     init test
        const owner = 'Marvel';
        // 2     estimulo
        const heroe = getHeroesByOwner(owner);
        // 3     watch behavior
        expect(heroe).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
    test('must return undefined if hero does not exist', () => {
        // 1     init test
        const id = 10;
        // 2     estimulo
        const heroe = getHeroeById(id);
        // 3     watch behavior
        expect(heroe).toBe(undefined);
    });
    test('must return an array wih the heroes owned by DC', () => {
        // 1     init test
        const owner = 'DC';
        // 2     estimulo
        const dcOwned = getHeroesByOwner(owner);
        // 3     watch behavior        
        expect(dcOwned).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        expect(dcOwned.length).toBe(3);
    });
    test('must return an array wih the heroes owned by Marvel', () => {
        // 1     init test
        const owner = 'Marvel';
        // 2     estimulo
        const marvelOwned = getHeroesByOwner(owner);
        // 3     watch behavior        
        expect(marvelOwned).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        expect(marvelOwned.length).toBe(2);
    });

});