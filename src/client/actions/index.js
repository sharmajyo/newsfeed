import axios from 'axios';
import {
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
} from '../constants';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8081/api' : '/api';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeeds: () => {
      return axios({
        method: 'get',
        url: `${ROOT_URL}/feeds`,
        headers: [],
      })
        .then(({ data }) => {
          dispatch({ type: FETCH_FEEDS_SUCCESS, data });
        })
        .catch((error) => {
          dispatch({ type: FETCH_FEEDS_FAILURE, error });
        });
    },
  };
};

export default mapDispatchToProps;
