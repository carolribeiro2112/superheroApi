import {action} from 'typesafe-actions';
import {SuperHeroTypes, SuperHeroes} from './types';

export const loadSuperHeroRequest = (inputValue:any) => action(SuperHeroTypes.GET_SUPERHERO_REQUEST,inputValue);
export const loadSuperHeroSuccess = (data:SuperHeroes[]) => action(SuperHeroTypes.GET_SUPERHERO_SUCCESS,data)
export const loadSuperHeroFailure = (error:any) => action(SuperHeroTypes.GET_SUPERHERO_FAILURE,error)