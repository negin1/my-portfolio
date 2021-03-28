import React from 'react'
import Projects from './Projects';
import styled from 'styled-components';

const SectionWrapper =styled.div`
  margin-top:140px
`
  const SectionTitle =styled.h1`
  margin:20px 20px;
  text-align:center;
  padding-bottom: 20px;
  font-weight:bold;
  margin-bottom: 18px;
  @media screen and (max-width: 768px){
    font-size: 20px
  }
`;
const ProjerctWrapper = styled.div`

 display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectRow  = styled.div`

display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content:space-around;
  margin: 0 auto;
  
`;



function Project() {
  return ( 
    <SectionWrapper>
   <SectionTitle>Projects </SectionTitle>
      <ProjerctWrapper>
        <ProjectRow>
        <Projects 
          id = "1"
          title='Amazon Clone'
          description = 'This Amazon Clone is a web application developed using React.The clone supports user authentication and a checkout function.'
          image={"/images/amazon.jpg"}
          github="https://github.com/negin1/amazon-clone"
        />

        <Projects 
          id = "2"
          title='Portfolio Website'
          description = 'This is the website you are currently looking at. It  is the first website I created in React. Styled components has been used and react router.  '
          image={"/images/portfolio.png"}
          github="https://github.com/negin1/my-portfolio"
        />

        <Projects 
          id = "3"
          title='The Quire Notebook'
          description = 'This notebook  is written in vanilla  JavaScript. The text editor library CKEditor 5, was used to develop the notebook'
          image={"/images/quire.jpg"}
          github="https://github.com/Zztorp/fe20tp1_marker"
        />
   </ProjectRow>
   </ProjerctWrapper>
 </SectionWrapper>
  )
}
export default Project
