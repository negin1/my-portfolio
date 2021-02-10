import React from 'react';
import styled from 'styled-components';


const SkillsContainer = styled.div`
  margin-top:30px;
  margin: 0 auto;
  display: block;
  width: 80%;
 `;

const SectionTitle = styled.h1`
  font-family: roboto;
  font-size: 40px;
  margin:20px 20px;
  text-align:center;
  font-weight:bold;
  padding-bottom: 20px
`;


 const SkillsImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
     img{
        width:10%;
        padding: 3%;
        }
      @media screen and (max-width: 768px){
        img{
           width:15%;
        }
      }
 `

 const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
      a{
        color: black;
        font-weight:bold;
        line-height: 1em;
        padding: 0 5px 0 5px;



    }    @media screen and (max-width: 1200px){
        display: block;
        padding-top: 100px;
    }
 `;

  const SocialMedia = styled.div`
  `
 
 
const Skills = () => {
  return (
    <SkillsContainer> 
    <SectionTitle>Web Development Skills </SectionTitle>
   
        <SkillsImg>
        <img src="/images/logos/html5.png" alt="html5 logo"/>
        <img src="/images/logos/css3.png" alt="css3 logo"/>
        <img src="/images/logos/js.png" alt="js logo"/>
        <img src="/images/logos/react.png" alt="react logo"/>
        <img src="/images/logos/github2.png" alt="github logo"/>
        <img src="/images/logos/git.png" alt="git logo"/>  
        </SkillsImg>

        <Contact> 
        To see my skills in ation, cheek out my porrtfolio or  <a href="mailto:negin.jalalian@gmail.com?subject= get in though">  drop me an email </a> and tell me about your project idea! 
    </Contact>

    <SocialMedia>
  
    <a href="https://www.linkedin.com/in/negin-jalalian-68324824/"> <i class="fab fa-linkedin-in"></i> </a>


    </SocialMedia>

    </SkillsContainer>
  )
}

export default Skills
