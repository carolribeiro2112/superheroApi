import api from './api';

const SuperHeroService = {
  getSuperHero: (inputValue: any) => api.get(`/search/${inputValue}`)
}

export default SuperHeroService;