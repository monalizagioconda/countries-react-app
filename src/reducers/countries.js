import { createSlice } from "@reduxjs/toolkit";

// createSlice 'pod maską' sam tworzy kopie obiektów, jest odpowiedzialny za ich niemutowanie, dlatego sami nie musimy się tym przejmować i możemy wykonywać różne metody bezpośrednio na stanie

// const { actions, reducer } = createSlice({
const countriesSlice = createSlice({
  name: "countries",
  // initialState (nazwa wbudowana)
  initialState: {
    items: undefined,
    data: {},
  },
  reducers: {
    // action jest opcjonalne
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setData: (state, action) => {
      state.data[action.payload.code] = action.payload;
    },
  },
});

export const { setItems, setData } = countriesSlice.actions;

export default countriesSlice.reducer; // createSlice daje nam dostęp do metody reducer (under the hood)
// jest to obecny stan slice'a 'countries'

// setItems([1, 2, 3]);
// setData({ code: "PL", currency: "pln" });

// inny sposób
// const obj = {}

// obj.id = 6
// lub
// obj['id'] = 6
// lub
// const propName = 'id'
// obj[propName] = 6

// obiekt obj zawiera teraz właściwość id o wartości 6
// console.log(obj) => { id: 6 }
