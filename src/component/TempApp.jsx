import React,{useState} from 'react'
import axios from 'axios';
import './tempApp.scss'

function TempApp() {

    
    const [data,setData]=useState({});
    const [location,setLocation]=useState('');

    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=895b84687fcddc3e0be9289362976c63`;


    const searchLocation = (event)=>{

        if(event.key==="Enter"){
            axios.get(URL)
            .then((response)=>{
                setData(response.data);
                console.log(response.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    }


  return (
    <>
        <div className='search'>
            <input 
            type="text" 
            onChange={event=>setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyPress={searchLocation}
            value={location}/>
        </div>
        <div className='conatiner'>
            <div className='top'>
                <div className='location'>
                    <p>{data.name}</p>
                </div>
                <div className='temp'> 
                    {data.main ? <h1>{Math.round((data.main.temp-273.15)*10)/10} ℃</h1>:null}
                    {/* <h1>{data.temp.main - 273.15}</h1> */}
                </div>
                <div className='description'>
                    {data.weather ? <p>{data.weather[0].main}</p>:null}
                    <p>Clouds</p>
                </div>        
            </div>
            <div className='bottom'>
                <div className='feels'>
                    {data.main ? <p>{Math.round((data.main.feels_like-273.15)*10)/10} ℃</p>:null}
                </div>
                <div className="humidity">
                    {data.main ? <p>{data.main.humidity} %</p>:null}
                </div>
                <div className='wind'>
                    {data.main ? <p>{data.main.pressure} MPH</p>:null}
                </div>
            </div>
            </div>
    </>
    
  )
}

export default TempApp
