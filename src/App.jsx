import { lazy, Suspense, useState } from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HOme from './Component/HOme'

const Collection =lazy(()=>import("./Component/Collection"))
function App() {
  return (
    <>
 
   <Router>
   <Navbar/>
   <Suspense fallback={<div>Loading...</div>}>

  <Routes>
    <Route path="/" element={<HOme />} />
    <Route path="/collection" element={<Collection />} />
  </Routes>
  </Suspense>
</Router>


    </>
  )
}

export default App
