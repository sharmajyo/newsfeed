import axios from 'axios';
import {
  FETCH_FEEDS,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
} from '../constants';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8081/api' : '/api';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeeds: () => {
      const request = axios({
        method: 'get',
        url: `${ROOT_URL}/feeds`,
        headers: [],
      });

      return {
        type: FETCH_FEEDS,
        payload: request,
      };
    },
    fetchFeedsSuccess: ({ data }) => {
      dispatch({ type: FETCH_FEEDS_SUCCESS, data });
    },
    fetchFeedsFailure: (error) => {
      dispatch({ type: FETCH_FEEDS_FAILURE, error });
    },
  };
};

export default mapDispatchToProps;
