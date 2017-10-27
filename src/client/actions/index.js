import axios from 'axios';
import superAgent from 'superagent';
import Promise from 'bluebird';
import {
  API_FAILURE,
  RESET_API_ERROR,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE,
} from '../constants';


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8081/api' : '/api';

const mapDispatchToProps = (dispatch) => {
  const getPromise = (url, params) => {
    return new Promise((resolve, reject) => {
      superAgent
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          return reject(err);
        }
        return resolve(response.body);
      });
    });
  };

  const getFeeds = () => {
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
  };

  return {
    fetchFeeds: () => {
      getFeeds();
    },
    getFeed: (params) => {
      const baseEndPoint = 'https://api.rss2json.com/v1/api.json';

      getPromise(baseEndPoint, { rss_url: params })
      .then((data) => {
        dispatch({ type: FETCH_FEED_SUCCESS, data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_FEED_FAILURE, error });
      });
    },
    addFeed: ({ name, url }) => {
      if (!name || !url) {
        throw new Error('missing required fields');
      }

      return axios({
        method: 'post',
        url: `${ROOT_URL}/feed`,
        data: { name, url },
      })
      .then(() => {
        getFeeds();
      })
      .catch((error) => {
        dispatch({ type: API_FAILURE, error });
      });
    },
    resetError: () => {
      dispatch({ type: RESET_API_ERROR });
    },
  };
};

export default mapDispatchToProps;
