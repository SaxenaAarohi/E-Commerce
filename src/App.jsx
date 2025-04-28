import { useState } from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HOme from './Component/HOme'
import Collection from './Component/Collection';

function App() {
 
  return (
    <>
   
 <Router>
 <Navbar/>
  <Routes>
    <Route path="/" element={<HOme />} />
    <Route path="/collection" element={<Collection />} />
  </Routes>
</Router>
    </>
  )
}

export default App
