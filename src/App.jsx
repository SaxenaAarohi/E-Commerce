import { createContext, lazy, Suspense, useState } from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HOme from './Component/HOme'
import Cart from './Cart';
import Login from './Component/Login';
import Shimmer from './Component/Shimmer';
import Details from './Component/Details';
import Search from './Component/Search';
import Signup from './Component/Signup';

export const Appcontext = createContext();
function App() {
  const [user, setUser] = useState("");
  return (
    <div className='bg-[#f3f3f3] cursor-pointer'>
      <Router>
        
          <Appcontext.Provider value={{user}}>
                 <Navbar />
            <Routes>
              <Route path="/" element={<HOme />} />
              <Route path='/search' element={<Search />} />
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Appcontext.Provider>

          <Routes>
            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path='/signup' element={<Signup setUser={setUser}/>} />
          </Routes>


      
      </Router>


    </div>
  )
}

export default App
