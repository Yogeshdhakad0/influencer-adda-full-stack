
import { Lock, Mail, Phone, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
// import { AuthRegister } from '../features/Auth/Authslice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AuthRegister } from '../features/Auth/Authslice';

const Register = () => {

  const {users,isLoading,Message ,isError,isSuccess}=useSelector(state=>state.auth)


  const dispacth=useDispatch()
  const navigate = useNavigate(); // ✅

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  
   

    dispacth(AuthRegister({ name, email, phone, password }))
    setName('')
    setEmail('')
    setPassword('')
    setPhone('')
  };


  useEffect(()=>{ 
    if (isSuccess) {
      navigate('/login');
    }
  
    if (isError && Message) {
    toast.error(Message);
    }
  },[ users,isError,Message,navigate])




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
          Create Account
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
                placeholder="Enter your phone number"
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
              {/* <input
              
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
                placeholder="Create a password"
                required
              /> */}

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="new-password"
  className="w-full bg-gray-700/30 text-white placeholder-gray-400 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-600/50"
  placeholder="Create a password"
  required
/>

            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg transition duration-300 font-medium"
          >
            Create Account
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-500 hover:text-pink-400 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register
