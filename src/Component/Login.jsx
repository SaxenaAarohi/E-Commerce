import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handlecontinue() {
    if(email && pass)
    {
      setUser("name");
  navigate("/");
    }
  
  }

  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-200 px-2">
    <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-xs">
      <h2 className="text-lg pt-5 font-semibold mb-3 text-center text-gray-800">Sign-In</h2>

      <form className="flex flex-col gap-3">
        <div>
          <label className="text-xs font-medium text-gray-700">Email or mobile</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            className="w-full mt-1 p-1.5 border border-gray-300 rounded text-xs"
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full mt-1 p-1.5 border border-gray-300 rounded text-xs"
            required
          />
        </div>

        <button
          onClick={handlecontinue}
          className="bg-yellow-400 hover:bg-yellow-500 py-1.5 rounded text-xs font-semibold text-black transition">
          Continue
        </button>

        <p className="text-[10px] text-gray-600 text-center leading-tight">
          By continuing, you agree to Amazon's <span className="text-blue-600 hover:underline">Conditions</span> and <span className="text-blue-600 hover:underline">Privacy</span>.
        </p>

        <a href="#" className="text-blue-600 text-[10px] hover:underline text-center">Need help?</a>
      </form>

      <div className="border-t border-gray-300 my-3" />

      <p className="text-xs text-gray-800 mb-2 text-center font-medium">New to Amazon?</p>
      <a
        href="/signup"
        className="block text-center bg-gray-300 hover:bg-gray-400 py-1.5 rounded text-xs font-medium mb-3 transition"
      >
        Create account
      </a>
    </div>
  </div>
);

};

export default Login;
