import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from '@material-ui/core';

import * as SuperHeroesActions from '../../store/ducks/superhero/actions';

const SuperHeroSearch = () => {
  const dispatch = useDispatch();

  const inputValue = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(SuperHeroesActions.loadSuperHeroRequest(inputValue?.current?.value))
  }
  
  return(
    <div>
      <input type="text" placeholder="digite aqui" ref={inputValue}/>
      <Button onClick={handleSubmit}>buscar</Button>
    </div>
  );
}

export default SuperHeroSearch;