import React,{useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Demo from './Demo';
import img from "../images/2850815.jpg";
import '../SASS/UserLocation.scss';
const UserLocation = ({weatherData}) => {
    
  // const paperStyle = {
  //   padding: "20px 30px",
  //   width: '94vw',
  //   height: "93vh",
  //   margin:'0 auto',
  //   backgroundImage:`url(${img})`,
  //   backgroundSize:'cover',
  //   backgroundRepeat:'no-repeat',
  //   backgroundPosition:'center'
  // };
  const iconurl=`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Nocvember',
    'December',
  ];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const date = `${currentDate.getDate()} ${
    months[currentDate.getMonth()]}, ${days[currentDate.getDay()]} `;
  
    const Capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
    return(
    <div>
    <Grid>
    <Paper elevation={0} className="paperstyle">
       <Grid container spacing={3}>
        <Grid className="current-weather-des" item xs={6} sm={3}>
          <p>{weatherData.current.weather[0].description ? Capitalize(weatherData.current.weather[0].description) : null} 
          <img  src={iconurl}  />
          </p>
          
         </Grid>
        <Grid item xs={6}>
           <p className="date">{date}</p>
        </Grid>  
      </Grid>
      <Grid container spacing={3}>
      {!weatherData ? (
        <p>No DATA Found</p>
      ): (
        
         
           <Demo weatherData={weatherData} /> 
         
        
      )}
      
        <Grid item xs={6}>
        <p className="current-temp">{weatherData.current.temp ? weatherData.current.temp: null}{'\u00b0'}C</p>
        </Grid>  
      </Grid>
      </Paper>
    </Grid>
    </div>

    )
}

export default UserLocation;

