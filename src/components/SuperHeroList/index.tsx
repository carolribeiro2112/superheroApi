import React from 'react';
import { useSelector } from 'react-redux';

import {SuperHeroes} from '../../store/ducks/superhero/types';

import CircularProgress from '@material-ui/core/CircularProgress';
import {GridContainer} from './styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 450,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const SuperHeroList = () => {

  const classes = useStyles();
  
  const {loading, arraySuperHeroes, error} = useSelector((state:any)=> state.superhero)

  console.log('loading list',loading)
  console.log('loading list',arraySuperHeroes)

  return(
    <div>
      {loading && <CircularProgress/> }


      <GridContainer>
          {
          arraySuperHeroes &&
          arraySuperHeroes.map((item:SuperHeroes)=>(
            <Card className={classes.card}key={item.id}>
              <CardMedia 
                component="img"
                height='270'
                image= {item.image.url}
              />
              <CardContent>
                <h2>{item.name}</h2>
                <h3>{item.biography['full-name']}</h3>
                <p>{item.work.occupation}</p>
              </CardContent>
            </Card>
          ))
          }
      </GridContainer>

      

      <p>{error}</p>
    </div>
  )
}

export default SuperHeroList;