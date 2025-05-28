import axios from "axios"
const BaseUrl="https://influencer-adda-full-stack.onrender.com"
const getsingleinfluencre=async(id)=>{
    const response =await axios.get(`${BaseUrl}/api/influencer/single/`+id)
    console.log(response.data)
    return response.data
}


const  influencerservice={getsingleinfluencre}

export default influencerservice