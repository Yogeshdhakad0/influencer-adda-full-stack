import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authservice from "./authservice";
const setuser= JSON.parse(localStorage.getItem('user'))

const authslice=createSlice({
    name:"auth",
    initialState:{
        users: setuser|| null,
        isLoading:false,
        isError:false,
        isSuccess:false,
        issuccess:false,//  ye mene login page ko  navgite  to home page
         Message:''

    },
    extraReducers:(builder)=>{
        builder
.addCase(AuthRegister.pending,(state,action)=>{
          state.isLoading=true
           state.isError=false
           state.isSuccess=false
 })  
 .addCase(AuthRegister.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        state.users=action.payload
})  
.addCase(AuthRegister.rejected,(state,action)=>{
    state.isLoading=false
        state.isError=true
        state.isSuccess=false
        state.Message=action.payload
}) 

.addCase(AuthLogin.pending,(state,action)=>{
    state.isLoading=true
     state.isError=false
     state.isSuccess=false
})  
.addCase(AuthLogin.fulfilled,(state,action)=>{
 
  state.isLoading=false
  state.isError=false
  state.issuccess=true
  state.users=action.payload
})  
.addCase(AuthLogin.rejected,(state,action)=>{
state.isLoading=false
  state.isError=true
  state.isSuccess=false
 
  state.Message=action.payload
})



.addCase(AuthUpdateuser.pending,(state,action)=>{
    state.isLoading=true
     state.isError=false
     state.isSuccess=false
})  
.addCase(AuthUpdateuser.fulfilled,(state,action)=>{
 
  state.isLoading=false
  state.isError=false
  state.issuccess=true
  state.users = state.users.map((item) => 
    item._id === action.payload._id ? item : action.payload
  );
})  
.addCase(AuthUpdateuser.rejected,(state,action)=>{
state.isLoading=false
  state.isError=true
  state.isSuccess=false
 
  state.Message=action.payload
})





.addCase(getLoginOut.fulfilled,(state,action)=>{
    state.isError=false
    state.issuccess=false
    state.users=[]
    state.isLoading=false
    state.Message=''
})

    },
})


export default authslice.reducer;

export  const  AuthRegister= createAsyncThunk('AUTH/REGISTER',async(fromdata,thunkAPI)=>{
    // console.log(fromdata)
    try {
      
        return await authservice.Registerservice(fromdata)
    } catch (error) {
        console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)
    }
})

export  const  AuthLogin= createAsyncThunk('AUTH/LOGIn',async(fromdata,thunkAPI)=>{
    try {
        return await authservice.Loginservice(fromdata)
    } catch (error) {
        // console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)
    }
})
export  const  AuthUpdateuser= createAsyncThunk('USER/UPDATE',async(fromdata,thunkAPI)=>{
    try {
        return await authservice.updateservice(fromdata)
    } catch (error) {
        // console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)
    }
})



export const  getLoginOut=createAsyncThunk('LOGOUT/AUTH',async()=>{
    localStorage.removeItem('user')
 })