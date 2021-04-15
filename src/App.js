
import React,{useEffect, useState} from 'react';
import UserLocation from './components/UserLocation';
import Spinner from './components/Spinner';
import './images/2850815.jpg';


const App = () => {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  
  

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily,minutely,alerts&units=metric&appid=37129062016901f2794952778d36c722`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        // console.log(result);
        // console.log(data);
      });
    }
    fetchData();

  },[lat, long]);

  // console.log(lat);
  return(
     <div>
       {(((typeof data.hourly) && (typeof data.current)) !='undefined' )?(
          <UserLocation weatherData={data} /> 
         
       ):(
         <Spinner />
       )}
     </div>
  )
}

export default App;


