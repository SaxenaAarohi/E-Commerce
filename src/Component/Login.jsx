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
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className="bg-white p-16 rounded-3xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-6xl font-extrabold mb-12 text-center text-gray-800">Sign-In</h2>

        <form className="flex flex-col gap-10">
          <div>
            <label className="text-3xl font-semibold text-gray-700">Email or mobile number</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              className="w-full mt-4 p-6 border border-gray-300 rounded-2xl text-2xl"
              required
            />
          </div>

          <div>
            <label className="text-3xl font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full mt-4 p-6 border border-gray-300 rounded-2xl text-2xl"
              required
            />
          </div>

          <button
            onClick={handlecontinue}
            className="bg-yellow-400 hover:bg-yellow-500 py-5 rounded-2xl text-black font-bold text-3xl transition">
            Continue
          </button>

          <p className="text-xl text-gray-700 leading-relaxed text-center">
            By continuing, you agree to Amazon's <span className="text-blue-600 hover:underline">Conditions of Use</span> and <span className="text-blue-600 hover:underline">Privacy Notice</span>.
          </p>

          <a href="#" className="text-blue-600 text-xl hover:underline text-center">Need help?</a>
        </form>

        <div className="border-t border-gray-300 my-12" />

        <p className="text-3xl text-gray-800 mb-6 text-center font-semibold">New to Amazon?</p>
        <a
          href="/signup"
          className="w-full block text-center bg-gray-300 hover:bg-gray-400 py-5 rounded-2xl text-2xl font-semibold transition"
        >
          Create your Amazon account
        </a>
      </div>
    </div>
  );
};

export default Login;
