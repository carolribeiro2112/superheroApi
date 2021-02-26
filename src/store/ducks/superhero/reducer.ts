import {SuperHeroTypes} from './types';

const INITIAL_STATE:any = {
  arraySuperHeroes: [],
  loading: false,
  error:''
}

function superHeroReducer(state=INITIAL_STATE, action:any){
  switch(action.type){
    case SuperHeroTypes.GET_SUPERHERO_REQUEST:
      return {...state, loading:true}
    case SuperHeroTypes.GET_SUPERHERO_SUCCESS:
      return{
        ...state,
        loading:false,
        arraySuperHeroes: action.payload,
        error:''
      }
      case SuperHeroTypes.GET_SUPERHERO_FAILURE:
        return{...state, loading:false, error:action.payload}
      default:
        return state
  }
}

export default superHeroReducer;