import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import  heroes  from '../../src/data/heroes';


describe('pruebas en 09 promesas', () => {
    test('must return a hero',(done) => {
        const id= 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes.find( (heroe) => heroe.id === id ));
                done();
                })
            .catch(err => {
                done(err);
                })
    });

    test('must return an error if hero doesnt exists',(done) => {
        const id= 10;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
                })
    });
})