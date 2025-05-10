import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({setUser}) => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
   const[name,setName]=useState("");

    function handlecontinue() {
      if(email && pass)
      {
        setUser(name);
    navigate("/");
      }
    
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
          <div className="bg-white p-16 rounded-3xl shadow-2xl w-full max-w-3xl">
            <h2 className="text-6xl font-extrabold mb-12 text-center text-gray-800">Create Account</h2>
    
            <form className="flex flex-col gap-10">
              <div>
                <label className="text-3xl font-semibold text-gray-700">Your name</label>
                <input
                  type="text"
            onChange={(e)=>setName(e.target.value)}
                  className="w-full mt-4 p-6 border border-gray-300 rounded-2xl text-2xl"
                  required
                />
              </div>
    
              <div>
                <label className="text-3xl font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full mt-4 p-6 border border-gray-300 rounded-2xl text-2xl"
                  required
                />
              </div>
    
              <div>
                <label className="text-3xl font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                     onChange={(e)=>setPass(e.target.value)}
                  className="w-full mt-4 p-6 border border-gray-300 rounded-2xl text-2xl"
                  required
                />
                <p className="text-lg text-gray-500 mt-2">At least 6 characters</p>
              </div>
    
              <div>
                <label className="text-3xl font-semibold text-gray-700">Re-enter password</label>
                <input
                  type="password"
                  className="w-full mt-4 p-6 border border-gray-300 rounded-2xl text-2xl"
                  required
                />
              </div>
    
              <button 
              onClick={handlecontinue}
              className="bg-yellow-400 hover:bg-yellow-500 py-5 rounded-2xl text-black font-bold text-3xl transition">
                Create your Amazon account
              </button>
            </form>
    
            <p className="text-xl text-gray-700 mt-10 text-center">
              Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
            </p>
          </div>
        </div>
      );
};

export default Signup;
