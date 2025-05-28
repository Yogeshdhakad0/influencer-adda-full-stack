import axios from "axios"


const BaseUrl="https://influencer-adda-full-stack.onrender.com"

 


const fetchAllBookingForUser=async(token)=>{
    
    
    const options = {
        headers : {
            authorization : `Bearer ${token}`,
        }
    }
    
    const response =await axios.get(`${BaseUrl}/api/bookings`,options)
    //   console.log(response.data)
    
    return response.data
}




const AddBookingForUser=async( id,token)=>{
    
    
    const options = {
        headers : {
            authorization : `Bearer ${token}`,
        }
    }
   
    
    const response =await axios.post(`${BaseUrl}/api/bookings/${id}`,{},options)
    //   console.log(response.data)
      console.log('add booking')
    return response.data
}

// const  singlebookingforuser=async(id,token)=>{
    
    
//     const options = {
//         headers : {
//             authorization : `Bearer ${token}`,
//         }
//     }
//   console.log(id)
    
//     const response =await axios.get(`/api/bookings/${id}`,options)
//     //   console.log(response.data)
//     return response.data
// }






const bookingservices ={fetchAllBookingForUser,AddBookingForUser}

export default bookingservices





