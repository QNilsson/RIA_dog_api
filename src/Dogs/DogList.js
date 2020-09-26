import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {List} from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

const DogList = () => //functional component
{
	const classes=useStyles();
  const [dogData, setDogData] = useState ({
    dogs: [],
  }); //end state

  const fetchDogs = () => {
    axios
      .get ('https://api.thedogapi.com/v1/breeds', {
        headers: {'x-api-key': process.env.REACT_APP_DOGS_API_KEY},
      })
      .then (function (response) {
        //handle success
        console.log (response);
        setDogData ({
          dogs: response.data,
        });
      });
  }; //end fetchDogs

  useEffect (() => {
    //this is what calls your fetchDogs
    fetchDogs ();
  });

  const names = dogData.dogs.map(function(dog, idx){
	  return (dog.name)
  })

  const temps = dogData.dogs.map(function(dog, idx){
	  return (dog.temperament)
  })
  return (
	  <div>
    <Card className={classes.root}> 
      <CardContent>
		  {names.map(name => (
			  <Typography className={classes.title}>
				  {name} 
				  {temps.map(temp =>(
					  <Typography className={classes.pos}>
						  {temp}
					  </Typography>
				  ))}
			  </Typography>
		  ))}
        
         
        
        <Typography className={classes.pos} variant="body 2" color="textSecondary" component="p">
		
        </Typography>

      </CardContent>
    </Card>
	<Card variant="outlined" width="300">
		<CardContent>Hello there</CardContent></Card>
	</div>

	
  ); //end return
};
export default DogList;
