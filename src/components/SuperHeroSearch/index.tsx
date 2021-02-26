import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from '@material-ui/core';
import {Search} from './styles';

import * as SuperHeroesActions from '../../store/ducks/superhero/actions';

const SuperHeroSearch = () => {
  const dispatch = useDispatch();

  const inputValue = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(SuperHeroesActions.loadSuperHeroRequest(inputValue?.current?.value))
  }
  
  return(
    <Search>
      <input type="text" placeholder="digite aqui" ref={inputValue}/>
      <Button variant="contained" color="primary" onClick={handleSubmit}>buscar</Button>
    </Search>
  );
}

export default SuperHeroSearch;