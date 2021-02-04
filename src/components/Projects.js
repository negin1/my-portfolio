import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const ProjecrContainer = styled.div`

  width: 80%;
  margin: 0 auto;
  padding-top: 110px;
  `;

const SectionTitle = styled.h1`
text-align: center
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
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

  const ProjectTitle =styled.h1`
    font-size: 25px;
   text-align: center
  `;

const ProjectDescription = styled.p`
 font-size: 18px;
`;

const ProjectImg = styled.img`

  margin: 15px 15px;
  padding-bottom: 15px 15px;
  justify-content: center;
  width: 200px;
  height: 200px;

  `

 const GitBub = styled.a`
  font-size: 20px;
  text-decoration: none;
  margin-top: 30px;
  display: block;
`;

const projects = [
      { id: 1,
        title: "Simple landing pages",
        description: "This is a simlple landing page criated with HTML & CSS",
         github:"https://www.google.com/" }, 

      { id: 2,
        title: "The Quire notebook",
        description: "The applcation is written in vanila JS. The rich text editor library CK Editor 5 was used to develop the notebook.",
        github:"https://github.com/Zztorp/fe20tp1_marker",
        img:"/images/quire.jpg"
      
        }, 

      { id: 3, 
        title: "Portfolio website", 
        description: "This portfolio website is the first website I created in  React.", 
        github:"https://www.google.com/" } 
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
                <ProjectImg src={eachProject.img}>
                </ProjectImg> 
                  <GitBub>
                  <a href={eachProject.github} target="_blank"
                   className="githubLink">Live at GitHub  <i class="fab fa-github"></i> </a>
                   </GitBub>
                 
              </div>
              </EachProject>
            ))}
          </div>
      
        </ProjectRow>
    </ProjecrContainer>
    )
}

export default Projects;
