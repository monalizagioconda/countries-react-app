import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from './reducers/countries'

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
})

export default store
