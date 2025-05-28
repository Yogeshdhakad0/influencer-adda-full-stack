




import React, { useEffect, useState } from 'react';
import {

  Mail,
  Calendar,
  MapPin,
  Users,
  Link,
  Send,
  MessageCircle,
  Search,
  Filter,
  StarOff,
  StarHalf,
  Star,
  Divide
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { GetSingleIngluencers } from '../features/influencers/Influencerslice';
import { ADDUsersBooking } from '../features/booking/bookingslice';
import { toast } from 'react-toastify';
import { AddCommentUser, GetAllCommentUser } from '../features/comment/commentslice';




function Singleinfluncersdetali() {

const dispatch =useDispatch()
const  {id} = useParams()
const {influencer, isLoading,isError,Message}=useSelector(state=>state.influencer)
  const { Booking,bookingloading,bookingError, bookingSuccess,bookinMessage} = useSelector((state) => state.booking);    
const {
  usercomment,
  commentLoading,
  commentError,
  commentsuccess,
  commentMessage}=useSelector((state=>state.comment))

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // const [comments, setComments] = useState(usercomment);
  const [newComment, setNewComment] = useState('');

const location = useLocation();

  const handleAddComment = (e) => {
    e.preventDefault();

dispatch(AddCommentUser({_id:location.state._id,text:newComment}))


    if (!newComment.trim()) return;

    
    setNewComment('');
  };




const heandlesumbit =(e)=>{
  e.preventDefault()

dispatch(ADDUsersBooking(id))


}

// console.log(location.state)

  useEffect(()=>{
    dispatch(GetSingleIngluencers(id)) 
//     if(location.state){
// console.log('sdfsfsd')

//       }
      if(location.state){
        // dispatch(FetchSingleBooking(location.state._id)) 
        dispatch(GetAllCommentUser(location.state._id))

}

if( bookingSuccess){
  toast.success('booking add success')
}
  },[ dispatch,bookingSuccess,location.state])
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-900/80 backdrop-blur border-b border-purple-900/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-purple-400" />
            <input
              type="text"
              placeholder="Search influencers..."
              className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50"
            />
            <div className="flex gap-2 ml-4">
              <button className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700 transition-colors">
                <Filter className="w-5 h-5 text-purple-400" />
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors">
                All
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-2xl overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}></div>
          </div>

          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 -mt-12">
              <img
                src={influencer.profliepic }
                alt="Profile"
                className="w-24 h-24 rounded-2xl border-4 border-gray-800 shadow-xl object-cover z-10"
              />
              <div className="flex-1 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{influencer.name}</h1>
                    <p className="text-purple-300 flex items-center mt-2">
                      <MapPin className="w-4 h-4 mr-2" />
                     {influencer.location}
                    </p>


                    <p className="text-purple-300 flex items-center mt-2">
                      <Star className="w-4 h-4 mr-2" />
                    {influencer.rate}
                    </p>


                  </div>
                  <div className="flex gap-3">
                    <button className="bg-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-600 transition-all flex items-center gap-2">
                      <Link className="w-4 h-4" />
                    { location?.state?._id ?
                        <span> Ref: {location?.state?._id} </span>:"  Share Profile"
                      }
                    </button>
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                    
                      className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all"
                    >
                      Follow
                    </button>
                    
                  </div>
                </div>
                <div className="flex gap-6 mt-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="font-semibold">{influencer?.instagram_headle}</span>
                    <span className="text-purple-300">{influencer?.niche}</span>
                  </div>
                  
                
                </div>
                
              </div>
            </div>

            <div className="mt-8">
              <p className="text-purple-200 leading-relaxed">
                Digital content creator and lifestyle influencer with a passion for technology and fashion. Specializing in creating engaging content that resonates with young professionals. Featured in major tech publications and collaborated with leading brands.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-700 p-3 rounded-xl hover:bg-gray-600 transition-all group">
                  <Icon className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors" />
                </a>
              ))}
              
            </div>

          {
             location.state ?  <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              Comments <span className="text-sm text-purple-400 font-normal">({usercomment?.length})</span>
            </h2>
            <form onSubmit={handleAddComment} className="mb-8">
              <div className="flex gap-4">
                <img
                  src={influencer.profliepic}
                  alt="User"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <textarea
                  id="fname" 
           
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full bg-gray-700 rounded-xl p-4 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none"
                    rows={2}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="space-y-6">
              {/* {usercomment.map((comment) => (
                <div key={comment._id} className="bg-gray-700 rounded-xl p-6">
                  <div className="flex gap-4">
                    <img
                      src={comment._id}
                      alt={comment._id}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-purple-200">{comment._id}</h3>
                        <span className="text-sm text-purple-400">{comment._id}</span>
                      </div>
                      <p className="mt-2 text-purple-300">{comment._id}</p>
                      <div className="flex items-center gap-6 mt-4">
                        <button
                          onClick={() => handleLike(comment._id)}
                          className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span>{comment._id}</span>
                        </button>
                        <button className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}


{/*             

{comments.map((comment) => (
  <div key={comment._id} className="bg-gray-700 rounded-xl p-6 mb-4">
    <div className="flex gap-4">
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.user.name}`}
        alt={comment.user.name}
        className="w-10 h-10 rounded-xl object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-purple-200">{comment.user.name}</h3>
          <span className="text-xs text-purple-400">{new Date(comment.createdAt).toLocaleDateString()}</span>
        </div>
        <p className="mt-2 text-purple-300">{comment.text}</p>
        <div className="flex items-center gap-6 mt-4">
          <button
            onClick={() => handleLike(comment._id)}
            className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Like</span>
          </button>
          <button className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Reply
          </button>
        </div>
      </div>
    </div>
  </div>
))} */}




{Array.isArray(usercomment) && usercomment.map((comment) => (
  <div key={comment._id} className="bg-gray-700 rounded-xl p-6 mb-4">
    <div className="flex gap-4">
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.user.name}`}
        alt={comment.user.name}
        className="w-10 h-10 rounded-xl object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-purple-200">{comment.user.name}</h3>
          <span className="text-xs text-purple-400">{new Date(comment.createdAt).toLocaleDateString()}</span>
        </div>
        <p className="mt-2 text-purple-300">{comment?.text}</p>
        <div className="flex items-center gap-6 mt-4">
          {/* <button
            onClick={() => handleLike(comment._id)}
            className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Like</span>
          </button> */}
          <button   className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Reply
          </button>
        </div>
      </div>
    </div>
  </div>
))}

          
            </div>
          </div>:
          <>
        
          <h1 className=' md:text-2xl  my-2 md:my-8 md:font-semibold '>  I need to book this influencer. Once booked, the comment section will appear.</h1>
          
          </>
          }
          </div>
        </div>
      </div>

      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 p-8 rounded-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Request Booking</h2>
            <form className="space-y-6" 
            
            onSubmit={heandlesumbit}
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-300">Project Description</label>
                <textarea
                  className="w-full bg-gray-700 rounded-xl p-4 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                  rows={4}
                  placeholder="Describe your project..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-300">Preferred Date</label>
                <div className="flex items-center bg-gray-700 rounded-xl p-4">
                  <Calendar className="w-5 h-5 mr-3 text-pink-400" />
                  <input
                    type="date"
                    className="bg-transparent w-full text-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  type="submit"
                disabled={!influencer.isactive}
                  className={
                    influencer.isactive ?"flex-1 bg-gradient-to-r  bg-purple-500 py-3 rounded-xl font-semibold hover:shadow-lg transition-all ":"flex-1 bg-gradient-to-r  to-purple-500 py-3 rounded-xl font-semibold hover:shadow-lg transition-all "
                  }
                >
                 {influencer.isactive? " Send Request":' allreadybooked'}
                </button>
                <button
                  type="button"
                  
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1 bg-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Singleinfluncersdetali;
