export enum SuperHeroTypes {
  GET_SUPERHERO_REQUEST = '@superhero/GET_SUPERHERO_REQUEST',
  GET_SUPERHERO_SUCCESS = '@superhero/GET_SUPERHERO_SUCCESS',
  GET_SUPERHERO_FAILURE = '@superhero/GET_SUPERHERO_FAILURE',
}

export interface SuperHeroes {
  id:string,
  name: string,
  biography: SuperHeroBiography ,
  work: SuperHeroWork,
  connections: SuperHeroConnections,
  image: SuperHeroImage,
  powerstats: {
    intelligence: string,
    strength: string,
    speed: string,
    durability: string,
    power: string,
    combat: string
  }
}

export interface SuperHeroBiography {
  fullName: string,
  alterEgos: string,
  firstAppearance: string,
  publisher: string
}

export interface SuperHeroWork {
  occupation: string,
  base: string
}

export interface SuperHeroConnections {
  groupAffiliation: string,
  relatives: string
}

export interface SuperHeroImage {
  url: string,
}