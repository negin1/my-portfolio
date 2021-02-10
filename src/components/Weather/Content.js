import React from 'react';
import styled from 'styled-components';

const WeatherContent = styled.div`
 background-color: white;
  width: 100%;
  height: 100%;
  padding: 1rem 3rem;
  align-items:center;

 `;

  const WeatherTitle = styled.h1`
 font-size: 25px;
 margin:20px 20px;
text-align:center;
 font-weight:bold;

    @media screen and (max-width: 768px){
      font-size: 40px;
      
      position: relative; 
    }
 `;

 const TheApp =styled.div`

display:flex;
justify-content:center;
 
 `



const Content = (props) => {
  return (
<WeatherContent>
 <WeatherTitle> My weather forecast! </WeatherTitle>
 <TheApp>
    <div className="content">
    {props.children}
    </div>
  </TheApp>
  </WeatherContent>
  )
}

export default Content;
