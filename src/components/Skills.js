import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  margin-top:30px;
  margin: 0 auto;
  display: block;
  width: 80%;
 `;

const SectionTitle = styled.h1`
  text-align: center;
  margin: 20px 20px;
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

    </SkillsContainer>
  )
}

export default Skills