import React from 'react';
import { useSelector } from 'react-redux';

import {SuperHeroes} from '../../store/ducks/superhero/types';

import CircularProgress from '@material-ui/core/CircularProgress'

const SuperHeroList = () => {
  const {loading, arraySuperHeroes, error} = useSelector((state:any)=> state.superhero)

  console.log('loading list',loading)
  console.log('loading list',arraySuperHeroes)

  return(
    <div>
      {loading && <CircularProgress/> }

      {
        arraySuperHeroes &&
        arraySuperHeroes.map((item:SuperHeroes)=>(
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h3>{item.biography.fullName}</h3>
            <p>{item.work.occupation}</p>
          </div>
        ))
      }

      <p>{error}</p>
    </div>
  )
}

export default SuperHeroList;