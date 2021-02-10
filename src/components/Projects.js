import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const ProjecrContainer = styled.div`

  width: 80%;
  margin: 0 auto;
  padding-top: 110px;
  `;

const SectionTitle = styled.h1`
  font-size: 40px;
  margin:20px 20px;
  text-align:center;
  font-weight:bold;
  padding-bottom: 20px
`

 const ProjectRow = styled.div`
  display: flex;
  justify-content: center;
  `; 

/* const Test = styled.div`
  border: 2px solid blue;
  width: 1300vw;
  max-width: 1800px;
  margin: 5rem auto;
  display: grid;
  gap: 3rem;
` */




const EachProject = styled.div`
  background-color: #fff;
  display:flex;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
   

`;

  const ProjectTitle =styled.h1`
  font-size: 25px;
  padding: 20px;
  text-align: center
  `;

const ProjectDescription = styled.p`
 font-size: 18px;
 padding: 15px
`;

const ProjectDiv = styled.div`
    width: 300px;
    height: 200px;
    border:1px solid red;
    margin: 0 auto;
   
  `;
const ProjectImg = styled.img`
  border: 0.5px solid black;
  width: 100%;
  `;


const Button = styled.button`
  display: block;
 
  background-color: #16e0bd;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 30px;
  padding: 0 20px;
  margin:20px auto;
  cursor: pointer;
  box-sizing: border-box;
   &:hover {
    background-color: green;
    cursor: pointer;
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;   
   }
   a{
     color: white;
     font-size: 14px;
   }
`;


 

const projects = [
      { id: 1,
        title: "Landing Page",
        description: "This is a landing page criated with HTML & CSS.",
         github:"https://www.google.com/" }, 

      { id: 2,

        title: "Portfolio Website", 
        description: "This portfolio website is the first website I created in  React.", 
        github:"https://github.com/negin1/my-portfolio" 

        }, 

      { id: 3, 
         title: "The Quire Notebook",
        description: "This notebook  is written in vanila JS. The text editor library CK Editor 5 was used to develop the notebook.",
        github:"https://github.com/Zztorp/fe20tp1_marker",
        img:"/images/quire.jpg"
        } 
    ];

const Projects = () => {
  return (
    <ProjecrContainer>
      <SectionTitle>Projects </SectionTitle>
        <ProjectRow>
       
          <div className="projets">
            {projects.map((eachProject) =>(
              <EachProject>
                <div className="each-project" key={projects.id}>
                <ProjectTitle>{eachProject.title}</ProjectTitle>
                <ProjectDescription>{eachProject.description}</ProjectDescription>
                <ProjectDiv>
                <ProjectImg src={eachProject.img}></ProjectImg> 
                </ProjectDiv>
                  <Button><a href={eachProject.github} target="_blank"
                   className="githubLink">Code <i class="fab fa-github"></i> </a></Button>            
        
              </div>
              </EachProject>
            ))}
          </div>
        </ProjectRow>
    </ProjecrContainer>
    )
}

export default Projects;
