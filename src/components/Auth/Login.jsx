import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-emerald-500">
      <div className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 text-center mb-6">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-8">Log in to your account</p>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="placeholder-gray-400 text-gray-700 border-2 border-gray-300 bg-gray-100 focus:bg-white focus:border-blue-500 outline-none text-base sm:text-lg py-3 px-4 rounded-lg mb-4 transition duration-200"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="placeholder-gray-400 text-gray-700 border-2 border-gray-300 bg-gray-100 focus:bg-white focus:border-blue-500 outline-none text-base sm:text-lg py-3 px-4 rounded-lg mb-4 transition duration-200"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            className="bg-blue-500 text-white text-base sm:text-lg py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Login;
