import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'themeChanger',
  initialState: {
    value: true,
  },
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = counterSlice.actions

export default counterSlice.reducer