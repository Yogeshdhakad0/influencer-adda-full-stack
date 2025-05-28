
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search, Filter, Users, MapPin, TrendingUp, Award, Star } from 'lucide-react';
// import SearchFilters from '../components/homecomponets/SearchFilters';
// import FeatureCards from '../components/homecomponets/FeatureCards';
// import InfluencerList from '../components/homecomponets/Influencerlist';
// import Footer from '../components/Footer';


// function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedLocation, setSelectedLocation] = useState('all');
//   const [followerRange, setFollowerRange] = useState('all');

//   const influencers = [
//     {
//       id: 1,
//       name: 'Sarah Johnson',
//       category: 'lifestyle',
//       followers: '1.2M',
//       followersCount: 1200000,
//       location: 'New York',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
//       platforms: ['instagram', 'youtube'],
//       engagement: '4.5%'
//     },
//     {
//       id: 2,
//       name: 'Mike Chen',
//       category: 'food',
//       followers: '850K',
//       followersCount: 850000,
//       location: 'Los Angeles',
//       image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
//       platforms: ['youtube', 'twitter'],
//       engagement: '5.2%'
//     },
//     {
//       id: 3,
//       name: 'Emma Davis',
//       category: 'fashion',
//       followers: '2M',
//       followersCount: 2000000,
//       location: 'London',
//       image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
//       platforms: ['instagram'],
//       engagement: '3.8%'
//     }
//   ];

//   const categories = ['all', 'lifestyle', 'fashion', 'food', 'tech', 'travel'];
//   const locations = ['all', 'New York', 'Los Angeles', 'London', 'Paris', 'Tokyo'];
//   const followerRanges = [
//     { label: 'All', value: 'all' },
//     { label: '< 500K', value: '0-500000' },
//     { label: '500K - 1M', value: '500000-1000000' },
//     { label: '1M - 2M', value: '1000000-2000000' },
//     { label: '> 2M', value: '2000000-' }
//   ];

//   const isInFollowerRange = (followersCount, range) => {
//     if (range === 'all') return true;
//     const [min, max] = range.split('-').map(Number);
//     return max ? followersCount >= min && followersCount < max : followersCount >= min;
//   };

//   const filteredInfluencers = influencers.filter(influencer => {
//     const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || influencer.category === selectedCategory;
//     const matchesLocation = selectedLocation === 'all' || influencer.location === selectedLocation;
//     const matchesFollowerRange = isInFollowerRange(influencer.followersCount, followerRange);
//     return matchesSearch && matchesCategory && matchesLocation && matchesFollowerRange;
//   });

//   return (
//     <div className="min-h-screen relative bg-gradient-to-br from-purple-900 via-gray-900 to-black">
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-gray-900/30 animate-gradient-xy"></div>
//         <img 
//           src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
//           className="w-full h-full object-cover opacity-5"
//           alt="background"
//         />
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="flex justify-between items-center mb-16">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
//             Find Influencers
//           </h1>
//           <div className="space-x-4">
//             <Link to="/login" className="bg-gray-800/80 hover:bg-gray-700 text-white px-6 py-2 rounded-lg backdrop-blur-sm transition">
//               Login
//             </Link>
//             <Link to="/register" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg transition">
//               Register
//             </Link>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto mb-24">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">Discover Top Influencers</h2>
//             <p className="text-gray-400 text-lg">Find and connect with influencers across different categories and locations</p>
//           </div>

//           <SearchFilters
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//             selectedLocation={selectedLocation}
//             setSelectedLocation={setSelectedLocation}
//             followerRange={followerRange}
//             setFollowerRange={setFollowerRange}
//             categories={categories}
//             locations={locations}
//             followerRanges={followerRanges}
//           />
//         </div>

//         <InfluencerList influencers={filteredInfluencers} />
//         <FeatureCards />
//       </div>
//       <Footer/>
// </div>
//   );
// }

// export default Home;





import React, { useEffect, useState } from 'react';
import { Search, Filter, Users, MapPin, TrendingUp, Award, Star } from 'lucide-react';
import SearchFilters from '../components/homecomponets/SearchFilters';
import FeatureCards from '../components/homecomponets/FeatureCards';
// import InfluencerList from '../components/homecomponets/Influencerlist';
import { useDispatch, useSelector } from 'react-redux';
import InfluencerList from '../components/homecomponets/InfluencerList';
import { GetallInfluencerforAdmin } from '../features/Admin/Adminslice';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

function Home() {

const dispatch =useDispatch()



const {Influencers}=useSelector(state=>state.admin)

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');



  useEffect(()=>{
dispatch(GetallInfluencerforAdmin())
  },[])
  // const influencers = [
  //   {
  //     id: 1,
  //     name: 'Sarah Johnson',
  //     category: 'lifestyle',
  //     followers: '1.2M',
  //     followersCount: 1200000,
  //     location: 'New York',
  //     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  //     platforms: ['instagram', 'youtube'],
  //     engagement: '4.5%'
  //   },
  //   {
  //     id: 2,
  //     name: 'Mike Chen',
  //     category: 'food',
  //     followers: '850K',
  //     followersCount: 850000,
  //     location: 'Los Angeles',
  //     image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  //     platforms: ['youtube', 'twitter'],
  //     engagement: '5.2%'
  //   },
  //   {
  //     id: 3,
  //     name: 'Emma Davis',
  //     category: 'fashion',
  //     followers: '2M',
  //     followersCount: 2000000,
  //     location: 'London',
  //     image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  //     platforms: ['instagram'],
  //     engagement: '3.8%'
  //   }
  // ];


  

  // enum:['lifestyle','education','technology','fashion','sports','gaming','fitness','podcast','devotional','comic','food','other']
  // enum:['male','female','other']

  const categories = ['all', 'lifestyle', 'education', 'technology', 'fashion', 'sports','comic','devotional','podcast','fitness','gaming','food','other'];
  const genders = ['all' , 'male', 'female', 'other', ];




  const filteredInfluencers = Influencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || influencer.niche === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || influencer.gender === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation ;
  });

  return (
    <div className="min-h-screen  bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-gray-900/30 animate-gradient-xy"></div>
        <img 
          src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          className="w-full h-full object-cover opacity-5"
          alt="background"
        />
      </div>

  

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Discover Top Influencers</h2>
            <p className="text-gray-400 text-lg">Find and connect with influencers across different categories and locations</p>
          </div>

          <SearchFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            // followerRange={followerRange}
            // setFollowerRange={setFollowerRange}
            categories={categories}
            genders={genders}
            // followerRanges={followerRanges}
          />
        </div>

        <InfluencerList influencers={filteredInfluencers} />
        <FeatureCards />
      </div>

   
    </div>
  );
}

export default Home;
