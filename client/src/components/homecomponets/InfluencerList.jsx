
import React from 'react';
import { MapPin, Instagram, Twitter, Youtube, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfluencerList = ({ influencers }) => {


 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {influencers.map((influencer) => (
        <div
          key={influencer._id}
          className="bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:transform hover:scale-105 transition duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={influencer.profliepic}
              alt={influencer.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-pink-500/50"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{influencer.name}</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                <span>{influencer.location}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              {influencer.niche.includes('comic') && <Instagram className="text-pink-500" size={20} />}
             
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="text-gray-400" size={16} />
                <span className="text-white">{influencer.followers}</span>
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-green-400">{influencer.engagement}</span> Engagement
              </div>
            </div>
          </div>
          <Link to={`auth/single/influncers/${influencer._id}`} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-2 px-2 rounded-lg transition">
          View Detalis
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InfluencerList;

