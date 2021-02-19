import React from 'react';
import styled from 'styled-components';


const AboutContainer = styled.div`
  display: flex;
  justify-content:center;
  margin: 0 auto;
  width: 80%;
  padding-top: 140px;

  
    @media screen and (max-width: 1400px) {
        display: block;
         padding-top: 100px;
    }

     @media  screen and(min-width: 500px) and (max-width: 800px) {
        display: block;
    }
 `;


const AboutContentBox =styled.div`
  padding:70px;

   @media  screen and(min-width: 500px) and (max-width: 800px) {
        flex-direction: row;
        justify-content: center;
         margin: auto 0;
    }
`;

 const AboutImg = styled.img`
   border-radius:50%;
   width:  200px;
   height: 200px;

    
 `;


const AbooutTitle = styled.h1`
    font-size: calc(20px + 10wv);
    font-weight:bold;
    margin-bottom: 18px; 
  
       @media  screen and(min-width: 500px) and (max-width: 800px) {
      width:
     
    }
 `;

const AboutSubheading = styled.h2`
    font-size: calc(19px + 10wv);
    font-weight:bold;
    margin-bottom: 10px;
 `;

 const AaboutDescription  = styled.p`
    font-size: calc(18px + 2wv);
    font-weight:bold;
    line-height: 2em;
    }
 `;




function About() {
  return (
      <AboutContainer>
        <AboutContentBox>
          <AbooutTitle>Hi, I'm Negin J,</AbooutTitle>
            <AboutSubheading>a Fronend Developer from Stockholm</AboutSubheading>
            <AaboutDescription>
              <p>I love working with new technologies and learn something new everyday. </p> 
              <p>Currently my main point of expertise is Fronend Development with a  focus on React.</p>
            </AaboutDescription>
       </AboutContentBox>
        <AboutContentBox>
        <AboutImg src="/images/negin.jpg" alt="Negin" ></AboutImg>
        </AboutContentBox>
     </AboutContainer>      
  );
};

export default About;
