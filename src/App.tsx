import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./component/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
  background-color: ${({ theme }: any) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
  
    </ThemeProvider>
  );
}

export default App;
