import {
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
} from '../constants';

const initialState = {
  feeds: {},
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case FETCH_FEEDS_SUCCESS:
      newState.feeds = action.data;
      return newState;
    case FETCH_FEEDS_FAILURE:
      console.log('here fail');
      return newState;
    default:
      return newState;
  }
};
