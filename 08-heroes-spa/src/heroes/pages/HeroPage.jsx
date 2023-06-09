import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';
import { useMemo } from 'react';

export const HeroPage = () => {

  const {id} = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  if(!hero){
    return <Navigate to="/" />
  }

  const { alter_ego, characters, first_appearance, publisher, superhero } = hero;

  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`../../src/assets/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>
        <button
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >
          Go Back
        </button>


      </div>
    </div>

  )
}
