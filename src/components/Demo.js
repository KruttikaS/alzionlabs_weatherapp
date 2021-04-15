import React,{Component} from 'react';
import Slider from 'react-slick';
import {Card,Grid, CardContent} from "@material-ui/core";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Moment from 'react-moment';
import "../SASS/UserLocation.scss";
const Demo = ({weatherData}) => {
    Moment.globalFormat = "D MMM YYYY";

    const settings = {
        dots:true,
        infinite:false,
        speed:500,
        focusOnSelect:true,
        slidesToShow:7,
        slidesToScroll:7,
        initialSlide:0,
        responsive:[
            {
                breakpoint:1500,
                settings:{
                    slidesToShow:7,
                    slidesToScroll:7,
                    infinite:true,
                    dots:true
                }
            },
            {
                breakpoint:1040,
                settings:{
                    slidesToShow:5,
                    slidesToScroll:5,
                    infinite:true,
                    dots:true
                }
            },
            {
                breakpoint: 840,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  initialSlide: 1,
                  dots:false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 1,
                  dots:false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots:false
                }
              }
        ]
    };

    
    return(
        <div className="demo-div">
            <p className="hourly-heading">Hourly Forecast</p>
            <Slider {...settings}>
               {weatherData.hourly.map((x,i) => {
                   const dateObj = new Date((x.dt)*1000);
                   const utcString = dateObj.toUTCString();
                   const time=utcString.slice(-13, -7);
                   

                   const iconurl=`http://openweathermap.org/img/wn/${x.weather[0].icon}.png`;
                   return(
                       <Grid>
                           <Card className="card-style" style={{backgroundColor: 'rgb(255, 255, 255, 0.2)'}}>
                               <CardContent>
                                   <img style={{margin:'0 auto'}} src={iconurl} />
                                   <p className="card-content">{x.temp}{'\u00b0'}C</p>
                                   <p className="card-content">{x.weather[0].description}</p>

                                   <p className="card-content"><Moment unix>{x.dt}</Moment></p>
                                   <p className="card-content">{time}</p>
                               </CardContent>
                           </Card>
                       </Grid>
                   )
               })}
          </Slider>
          </div>
    )
}

export default Demo;




