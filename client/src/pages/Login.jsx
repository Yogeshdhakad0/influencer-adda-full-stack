
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { toast } from 'react-toastify';
import { AuthLogin } from '../features/Auth/Authslice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {users,isLoading,Message ,isError ,issuccess}=useSelector(state=>state.auth)


  const usedispacth=useDispatch()
  const navgite= useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
   
 usedispacth(AuthLogin({email,password }))

  };
  useEffect(()=>{

    if(issuccess){
      navgite('/')
     }
if(isError &&Message){
toast(Message)
}
  },[ users,isError,Message ,navgite,issuccess])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-gray-900/30 animate-gradient-xy"></div>
        <img 
          src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          className="w-full h-full object-cover opacity-5"
          alt="background"
        />
      </div>
      
      <div className="w-full max-w-md p-8 bg-gray-800/30 backdrop-blur-md rounded-xl border border-gray-700/50">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                id="password"
                type="password"
                value={password}
                 autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
                placeholder="Enter your password"
                required
              />

{/* 
<input
    id="password"
    type="password "
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    // autoComplete="new-password"
    className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
    placeholder="Enter your password"
    required
  /> */}
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg transition duration-300 font-medium"
          >
            Sign In
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-500 hover:text-pink-400 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login
