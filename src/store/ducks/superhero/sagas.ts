import { put,call} from "redux-saga/effects"

import {loadSuperHeroSuccess,loadSuperHeroFailure} from './actions';

import SuperHeroService from '../../../services/super-hero-service';
import { AxiosResponse } from "axios";

export function* getSuperHero(action:any) {
  console.log('action',action)
  try {
    const response: AxiosResponse = yield call(SuperHeroService.getSuperHero,action.payload)
    yield put(loadSuperHeroSuccess(response.data))

  } catch(error) {
    console.log(error)
    yield put(loadSuperHeroFailure(error))
  }
}