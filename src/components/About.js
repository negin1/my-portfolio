import React from 'react';
import styled from 'styled-components';


const AboutContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 80%;
  padding-top: 200px;

  
    @media screen and (max-width: 1400px) {
        display: block;
         padding-top: 100px;
    }

     @media  screen and(min-width: 500px) and (max-width: 800px) {
        display: block;
    }
 `;

const AboutText = styled.div`
  margin: 0 200px 60px 0;
     @media  screen and(min-width: 500px) and (max-width: 800px) {
        display: block;
    }

    








`;

const AbooutTitle = styled.h1`
 font-size: 60px;
 margin-bottom: 4%;
 font-weight:bold;

    @media screen and (max-width: 768px){
      border: 1px solid red;
      float: left;
      margin-right: 5px; 
      padding: 12px;
      position: relative; 
      width: 450px; 
    }
 `;
const AboutSubheading = styled.p`
  font-size: 40px;
  
  font-weight:bold;
  padding-bottom: 10px;

     @media screen and (max-width: 768px){
      border: 1px solid red;
      position: relative; 
      width: 450px; 
    }
 `;

 const AaboutDescription  = styled.p`
    font-size: 20px;
    font-weight:bold;
    line-height: 2em;
  
     @media screen and (max-width: 768px){
      border: 1px solid red;
      padding:15px;
      margin-top:px;
      position: relative; 
      width: 450px; 
    }
 `;

 const AboutImg = styled.img`
    border-radius: 50%;
   
   @media screen and (max-width: 768px){
      width: 40; 
      padding:15px;
      margin-top:px;
      position: relative; 
      width: 450px; 
    }
 `;


 

function About() {
  return (
      <AboutContainer>
        <AboutText>
          <AbooutTitle >Hi, I'm Negin J,</AbooutTitle>
            <AboutSubheading>a Fronend Developer from Stockholm.</AboutSubheading>
            <AaboutDescription>
              <p>I love working with new technologies and learn something new everyday. </p> 
              <p>Currently my main point of expertise is Fronend Development with a  focus on React.</p>
            </AaboutDescription>
        </AboutText>
        <AboutImg src="/images/negin.jpg" alt="Negin" ></AboutImg>
     </AboutContainer>      
  );
};

export default About;
