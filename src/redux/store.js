import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import analyticSlice from './analytics/analyticSlice'
export default configureStore({
  reducer: {
     analyticSlice: analyticSlice
  },
  middleware:getDefaultMiddleware({
    serializableCheck:false,
  }),
})