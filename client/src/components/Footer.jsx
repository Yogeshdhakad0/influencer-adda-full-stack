import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 backdrop-blur-md border-t border-gray-800 ">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-400">Connecting brands with the perfect influencers to amplify your message and reach your target audience effectively.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-pink-500 transition">Home</Link></li>
            <li><Link to="/login" className="text-gray-400 hover:text-pink-500 transition">Login</Link></li>
            <li><Link to="/register" className="text-gray-400 hover:text-pink-500 transition">Register</Link></li>
            <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">Lifestyle</a></li>
            <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">Fashion</a></li>
            <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">Technology</a></li>
            <li><a href="#" className="text-gray-400 hover:text-pink-500 transition">Travel</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <div className="space-y-2 text-gray-400">
            <p>Email: contact@influencers.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">© 2025 Influencer Platform. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer



// import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10 border-t border-gray-700 mt-16">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-6 md:mb-0">
//           <h2 className="text-2xl font-bold text-pink-500">InfluenceHub</h2>
//           <p className="text-sm text-gray-400">Connecting brands with top influencers worldwide.</p>
//         </div>
        
//         <div className="flex space-x-6 mb-6 md:mb-0">
//           <a href="#" className="hover:text-pink-400">About</a>
//           <a href="#" className="hover:text-pink-400">Contact</a>
//           <a href="#" className="hover:text-pink-400">Privacy</a>
//           <a href="#" className="hover:text-pink-400">Terms</a>
//         </div>

//         <div className="flex space-x-4">
//           <a href="#" className="hover:text-blue-500"><Facebook size={20} /></a>
//           <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
//           <a href="#" className="hover:text-pink-500"><Instagram size={20} /></a>
//           <a href="#" className="hover:text-blue-600"><Linkedin size={20} /></a>
//         </div>
//       </div>

//       <div className="text-center mt-8 text-gray-500 text-sm">
//         © {new Date().getFullYear()} InfluenceHub. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 backdrop-blur-lg border-t border-gray-800 mt-24 shadow-inner">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      
//           {/* About */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
//               About Us
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Connecting brands with the perfect influencers to amplify your message and reach your audience effectively.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/" className="text-gray-300 hover:text-pink-400 transition">Home</Link></li>
//               <li><Link to="/login" className="text-gray-300 hover:text-pink-400 transition">Login</Link></li>
//               <li><Link to="/register" className="text-gray-300 hover:text-pink-400 transition">Register</Link></li>
//               <li><a href="#" className="text-gray-300 hover:text-pink-400 transition">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
//               Categories
//             </h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="text-gray-300 hover:text-pink-400 transition">Lifestyle</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-pink-400 transition">Fashion</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-pink-400 transition">Technology</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-pink-400 transition">Travel</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
//               Contact Us
//             </h3>
//             <div className="space-y-2 text-gray-300 text-sm">
//               <p>Email: contact@influencers.com</p>
//               <p>Phone: +1 (555) 123-4567</p>
//               <div className="flex space-x-4 mt-4">
//                 <a href="#"><Facebook className="text-gray-300 hover:text-pink-500 transition" size={20} /></a>
//                 <a href="#"><Twitter className="text-gray-300 hover:text-pink-500 transition" size={20} /></a>
//                 <a href="#"><Instagram className="text-gray-300 hover:text-pink-500 transition" size={20} /></a>
//                 <a href="#"><Linkedin className="text-gray-300 hover:text-pink-500 transition" size={20} /></a>
//               </div>
//             </div>
//           </div>

//         </div>

//         <div className="border-t border-gray-800 pt-8 text-sm">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-center md:text-left">© 2025 Influencer Platform. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="text-gray-300 hover:text-pink-400 transition">Terms of Service</a>
//               <a href="#" className="text-gray-300 hover:text-pink-400 transition">Privacy Policy</a>
//               <a href="#" className="text-gray-300 hover:text-pink-400 transition">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
