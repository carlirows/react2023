import { heroes } from "../data/heroes";

// create function that return a hero by id

export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
    }
