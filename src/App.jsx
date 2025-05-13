import { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './Cart';
import HOme from './Component/HOme';
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux';
import Details from './Component/Details';
import Login from './Component/Login';
import Search from './Component/Search';
import Signup from './Component/Signup';
import { store } from './Store';

export const Appcontext = createContext();
function App() {
  const [user, setUser] = useState("");
  return (
    <div className='bg-[#f3f3f3] cursor-pointer'>
      <Router>
        <Appcontext.Provider value={{ user }}>



          <Navbar />

          <Routes>
            <Route path="/" element={<HOme />} />
            <Route path='/search' element={<Search />} />
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

        </Appcontext.Provider>

        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path='/signup' element={<Signup setUser={setUser} />} />
        </Routes>

      </Router>


    </div>
  )
}

function appwithprovider() {
  return (
   <Provider store={store}>
      <App />
    </Provider>
  )
} 
export default appwithprovider;