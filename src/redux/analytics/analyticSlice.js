import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = getLocalUrl();
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

const apiUrl = process.env.REACT_APP_BASE_API_URL;
export const getAnalyticsAsync = createAsyncThunk('analytics/getAnalyticsAsync', async () => {
  const res = await axios.post(apiUrl+"/analyticsList" , {
    isLast30Minutes: true,
  });
return res;
})


const analyticSlice = createSlice({
    name: 'analytics',
    initialState: {
      datas: {
        FCPTimes: [],
        TTFBTimes: [],
        domLoadTimes: [],
        resourceLoadTimes: [],
        windowLoadTime: [],
        timeLine: [],
      },
      isLoading: true,
      error: null,
    },
    reducers: {
      
    },
    extraReducers: {
      [getAnalyticsAsync.pending] : (state,action) => {
        state.isLoading = true;
      },
      [getAnalyticsAsync.fulfilled] : (state,action) => {
        state.datas.FCPTimes = action.payload.data.map((item) => {
          return item.FCPTime;
        })
        state.datas.TTFBTimes = action.payload.data.map((item) => {
          return item.TTFBTime;
        })
        state.datas.domLoadTimes = action.payload.data.map((item) => {
          return item.domLoadTime;
        })
        state.datas.resourceLoadTimes = action.payload.data.map((item) => {
          return item.resourceLoadTime;
        })
        state.datas.windowLoadTime = action.payload.data.map((item) => {
          return item.windowLoadTime;
        })
        state.datas.timeLine = action.payload.data.map((item) => {
          let date = new Date(item.date); 
          return date.toLocaleString()
        })
        state.isLoading=false
      },
      [getAnalyticsAsync.rejected] : (state,action) => {
        state.isLoading=false;
        state.error =action.error.message
      },
    }
   
  })

  function getLocalUrl() {
    const url = window.location.href;
    const arr = url.split('/');
  
    return `${arr[0]}//${arr[2]}`;
  }

  export default analyticSlice.reducer;