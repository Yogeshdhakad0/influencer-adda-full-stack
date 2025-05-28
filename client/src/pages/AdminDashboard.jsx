


// import React, { useEffect, useState } from 'react';

// import BookingList from '../components/Admincomponet/BookingList';
// import CommentList from '../components/Admincomponet/CommentList';
// import AdminInfluencerList from '../components/Admincomponet/AdminInfluencerList';
// import AdminSidebar from '../components/Admincomponet/AdminSidebar';
// import { useDispatch, useSelector } from 'react-redux';
// import { GetallBookingforAdmin, GetallCommetforAdmin, GetallInfluencerforAdmin, GetallUserforadmin } from '../features/Admin/Adminslice';
// import UserList from '../components/Admincomponet/UserList ';
// import { useNavigate } from 'react-router-dom';
// // import { GetallUserforadmin } from '../features/Admin/Adminslice';

// function AdminDashboard() {
  
//     const { users } = useSelector((state) => state.auth); // Use 'auth' instead of 'admin'
//     const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('influencers');
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     dispatch(GetallInfluencerforAdmin());
//     dispatch(GetallUserforadmin());
//     dispatch(GetallBookingforAdmin());
//     dispatch(GetallCommetforAdmin());

//     if (users.isadmin ===false ||  !users || Object.keys(users).length === 0) {
//       navigate('/login');
//     }
//   }, [users, navigate]);





//   const renderContent = () => {
//     switch (activeTab) {
//       case 'influencers':
//         return <AdminInfluencerList />;
//       case 'users':
//         return <UserList />;
//       case 'bookings':
//         return <BookingList />;
//       case 'comments':
//         return <CommentList />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex flex-col md:flex-row">
//       <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <div className="flex-1 p-4 sm:p-6 md:p-8">
//         <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
//           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//         </h2>
//         {renderContent()}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;







import React, { useEffect, useState } from 'react';
import BookingList from '../components/Admincomponet/BookingList';
import CommentList from '../components/Admincomponet/CommentList';
import AdminInfluencerList from '../components/Admincomponet/AdminInfluencerList';
import AdminSidebar from '../components/Admincomponet/AdminSidebar';
// import UserList from '../components/Admincomponet/UserList';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   GetallBookingforAdmin,
//   GetallCommetforAdmin,
//   GetallInfluencerforAdmin,
//   GetallUserforadmin
// } from '../features/Admin/Adminslice';
import { useNavigate } from 'react-router-dom';
import UserListt from '../components/Admincomponet/UserList ';
import DashboardStats from '../components/Admincomponet/DashboardStats';

function AdminDashboard() {
  const { users } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboardstatus');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users || !users.isadmin) {
      navigate('/login');
      return; // prevent further execution
    }

 
  }, [users, navigate, dispatch]);

  const renderContent = () => {
    switch (activeTab) {

      case 'Dashboardstatus':
        return <DashboardStats />;


      case 'influencers':
        return <AdminInfluencerList />;
      case 'users':
        return <UserListt />;
      case 'bookings':
        return <BookingList />;
      case 'comments':
        return <CommentList />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex flex-col md:flex-row">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h2>
        {renderContent()}
      </div>
    </div>
  );
}

export default AdminDashboard;

