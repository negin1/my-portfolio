import React, {useState} from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Context from './Context';

import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import DateTime from './DateTime';
import Error from './Error';

const WeatherContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 80%;
  padding-top: 200px;

  
    @media screen and (max-width: 1400px) {
        display: block;
         padding-top: 30px;
    }

     @media  screen and(min-width: 500px) and (max-width: 800px) {
        display: block;
    }
 `;



const Weather = (props) => {

  const [weather, setWeather] = useState()

  const [ city, setCity ] = useState()

  const [ error, setError ]= useState()
  
  const api_call = async e => {

    e.preventDefault()

    const location = e.target.elements.location.value

    if(!location) return setError("Please enter the name of the city"), setWeather(null)

    const API_KEY = "d7645d47915b31b62348ef767eb389c4"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

    const request = axios.get(url)

    const response = await request

    setWeather(response.data.main)

     setCity(response.data.name)
  }

  weather && console.log(weather)

 
  return (
    <div>
    <WeatherContainer>
      <Content>
        <DateTime />
        <Context.Provider value={{api_call, weather, city }}>
          <WeatherSearch/>
            {weather && <WeatherData/>}
            {error && <Error error={error}/>}
        </Context.Provider>
      </Content>
      </WeatherContainer>
    </div>
  )
}

export default Weather;
