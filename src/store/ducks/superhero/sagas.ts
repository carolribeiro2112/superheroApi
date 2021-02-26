import { put,call} from "redux-saga/effects"

import {loadSuperHeroSuccess,loadSuperHeroFailure} from './actions';

import SuperHeroService from '../../../services/super-hero-service';

export function* getSuperHero(action:any):any {
  try {
    const response = yield call(SuperHeroService.getSuperHero,action.payload)
    yield put(loadSuperHeroSuccess(response))

  } catch(error) {
    console.log(error)
    yield put(loadSuperHeroFailure(error))
  }
}