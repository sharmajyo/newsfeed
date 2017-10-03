import { createStore, applyMiddleware, combineReducers } from 'redux';
import trunk from 'redux-thunk';

let store;
export default {
  configure: (initialState) => {
    const reducers = combineReducers({
      // add here
    });

    if (initialState) {
      store = createStore(reducers, initialState, applyMiddleware(trunk));
    } else {
      store = createStore(reducers, applyMiddleware(trunk));
    }

    return store;
  },
  currentStore: () => store,
};
