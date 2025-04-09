import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from './reducers/countries'

const store = configureStore({
  reducer: {
    countries: countriesReducer, // nasze nazwy - klucz i wartość, to jest jeden slice
  },
})

export default store

// np.
// calyStan = {
//   countries: {
//     items: undefined,
//     data: {},
//   },
//   sidebar: {
//     isOpen: false, itp.
//   }
// }

// wbudowane funkcje na store
// store.getState
// store.dispatch
