//import React, {useState} from 'react';
import './App.css';
import {Box, TextField} from '@mui/material/';
import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AppHeader from './AppHeader';
// import Home from './Home';
 import About from './About';

function App(props) {
  const [name, setName] = useState("");
  return (
    <div  style={{
      marginLeft: "30%"
  }}>
      {/* <h1>Welcome to Router</h1>
      <BrowserRouter>
      <AppHeader></AppHeader>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      </BrowserRouter> */}
       <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        '& > :not(style)': { m: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="name" variant="outlined"
      //  error={name.length === 0}
      //  helperText={!name.length ? 'name is required' : ''}
       value={name} 
       onChange={(e) => {
        setName(e.target.value);
    }}/></Box>
    <About  name={name}/>
      </div>    
  );
}

export default App;
