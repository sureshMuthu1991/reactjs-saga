const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_API_RESPONSE':
      return { ...state, getApiResponse: action.json }
    default: 
      return state;
  }
}
export default reducer;