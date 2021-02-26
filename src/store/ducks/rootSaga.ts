import {all, takeLatest} from 'redux-saga/effects';

import {getSuperHero} from './superhero/sagas';
import {SuperHeroTypes} from './superhero/types';

export default function* rootSaga():any {
  return yield all([
    takeLatest(SuperHeroTypes.GET_SUPERHERO_REQUEST,getSuperHero)
  ])
}