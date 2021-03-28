import React from 'react'
import styled from 'styled-components';



const EachProject = styled.div`
 background-color: #fff;
  border-radius: 15px;
  width:350px;
  margin:30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  justify-content:space-between;
`

const ProjectText = styled.div`
 height: 220px;
 padding-bottom:20px 20px;

 `;

const ImgBtn =styled.div`
    padding-bottom:10px;
`;

  const ProjectTitle =styled.h1`
  font-size: 20px;
  margin-top: 40px;
  text-align: center;
`;
 
const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 1.8em;
  padding: 20px 40px;
  
`;
    
const ProjectImg = styled.img`
  max-height: 150px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;


const Button = styled.button`
  display: block;
  background-color: #16e0bd;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 35px;
  padding: 0 20px;
  margin:40px auto;
  cursor: pointer;
  box-sizing: border-box;
   &:hover {
     border-bottom: 4px solid #fff;
  transition: all 0.2s ease-out;
   }
   a{
     color: white;
     font-size: 14px;
     font-weight:bold;
   }
`;

function Projects({title, description, image, github}) {
  return (
    
      <EachProject>
       <ProjectText>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        </ProjectText>
        <ImgBtn>
        <ProjectImg src={image} alt=""/>
        <Button><a href={github} target="_blank" rel="noreferrer"
           className="githubLink">Code <i className="fab fa-github"></i> </a></Button> 
        </ImgBtn>
      </EachProject>

  )
}

export default Projects
