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
  <div className="flex justify-center items-center min-h-screen bg-gray-200 px-2">
    <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-xs">
      <h2 className="text-lg font-bold mb-4 text-centerpt-3  text-gray-800">Create Account</h2>

      <form className="flex flex-col gap-3">
        <div>
          <label className="text-xs font-medium text-gray-700">Your name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-1.5 border border-gray-300 rounded text-xs"
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-700">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-1.5 border border-gray-300 rounded text-xs"
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-700">Password</label>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            className="w-full mt-1 p-1.5 border border-gray-300 rounded text-xs"
            required
          />
          <p className="text-[10px] text-gray-500 mt-1">At least 6 characters</p>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-700">Re-enter password</label>
          <input
            type="password"
            className="w-full mt-1 p-1.5 border border-gray-300 rounded text-xs"
            required
          />
        </div>

        <button
          onClick={handlecontinue}
          className="bg-yellow-400 hover:bg-yellow-500 py-1.5 rounded text-xs font-semibold text-black transition">
          Create account
        </button>
      </form>

      <p className="text-[10px] text-gray-600 mt-3 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
      </p>
    </div>
  </div>
);

};

export default Signup;
