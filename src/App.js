import styled ,{ ThemeProvider } from 'styled-components';
import {darkTheme} from './utils/theme'
import './App.css'
// import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Skills } from './components/skills';
import { Herosection } from './components/herosection';
import { Project } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { inject } from '@vercel/analytics';
 





const Body = styled.div`
background-color:${({theme})=>theme.bg};
width: 100%;
height:100%;
overflow-x:hidden:
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg,
    rgba(204, 0, 187, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%
    ),
  linear-gradient(141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  // clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    
        <Navbar/>
        <Body>
          <Herosection  />
            <Wrapper>
              <Skills />
              <Project/>
              <Contact/>
            </Wrapper>
            <Footer/>
            <SpeedInsights/>
        </Body>
      
    </ThemeProvider>
  );
}

inject();

export default App;
