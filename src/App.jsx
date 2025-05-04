import { lazy, Suspense, useState } from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HOme from './Component/HOme'
import Shimmer from './Component/Shimmer';
import Details from './Component/Details';

const Collection = lazy(() => import("./Component/Collection"))

function App() {
  return (
    <div className='cursor-pointer'>
      <Router>
        <Navbar />
        <Suspense fallback={<Shimmer/>}>
          <Routes>
            <Route path="/" element={<HOme />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/details/:id" element={<Details/>}   ></Route>
          </Routes>
        </Suspense>
      </Router>


    </div>
  )
}

export default App
