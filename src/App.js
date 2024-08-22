import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container, CssBaseline} from '@mui/material';
import darktheme from './components/theme';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';

import Books from './pages/Books';



function App() {

  return (
    <ThemeProvider theme={darktheme}>
    <CssBaseline />
    <Router>
  
      <Container disableGutters maxWidth={false} style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
        <Routes>
          <Route exact path="/" element={<Books />} />
          
        
         
         
           
        
       </Routes>
      </Container>
      
    </Router>
  </ThemeProvider>
  );
}

export default App;
