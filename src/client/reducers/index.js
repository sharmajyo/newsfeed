import {
  API_FAILURE,
  RESET_API_ERROR,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE,
} from '../constants';

const initialState = {
  feeds: {},
  selectedFeed: {},
  errorInfo: null,
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case API_FAILURE:
      newState.errorInfo = 'sorry, we were not able to add that';
      return newState;
    case RESET_API_ERROR:
      newState.errorInfo = null;
      return newState;
    case FETCH_FEEDS_SUCCESS:
      newState.feeds = action.data;
      return newState;
    case FETCH_FEEDS_FAILURE:
      newState.feeds = {};
      return newState;
    case FETCH_FEED_SUCCESS:
      newState.selectedFeed = action.data;
      return newState;
    case FETCH_FEED_FAILURE:
      newState.selectedFeed = {};
      return newState;
    default:
      return newState;
  }
};
