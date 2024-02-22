import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: undefined,
  data: {},
}

const { actions, reducer } = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setData: (state, action) => {
      state.data[action.payload.code] = action.payload
    },
  },
})

export const { setItems, setData } = actions

export default reducer
