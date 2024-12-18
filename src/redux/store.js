import { configureStore } from '@reduxjs/toolkit'
import themeReducer  from './counterSlice'

export default configureStore({
  reducer: {
    themeChanger: themeReducer,

  },
})