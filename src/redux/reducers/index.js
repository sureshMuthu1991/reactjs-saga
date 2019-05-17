import { combineReducers } from 'redux';
import reducers from './reducers';
const appReducer = combineReducers({
  reducers,
});
const initialState = {
  reducers: {},
}
const rootReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;