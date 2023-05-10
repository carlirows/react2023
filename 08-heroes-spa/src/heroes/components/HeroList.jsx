import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

// eslint-disable-next-line react/prop-types
export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
    {
        heroes.map(hero => (
            <li key={hero.id}>
                {hero.superhero}
            </li>
        ))
    }
    </ul>
  )
}
