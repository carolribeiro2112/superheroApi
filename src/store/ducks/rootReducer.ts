import {combineReducers} from 'redux'; 

import superHeroReducer from './superhero/reducer';

const createRootReducer = () => combineReducers({
  superhero: superHeroReducer,
})

export default createRootReducer;