function countries(state, action) {
  if (action.type === "SET_COUNTRIES") {
    return action.countries;
  } else {
    return state;
  }
}

function reducer(state = {}, action) {
  return {
    countries: countries(state.countries, action),
  };
}

export default reducer;
