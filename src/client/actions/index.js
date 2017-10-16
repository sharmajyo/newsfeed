import axios from 'axios';
import superAgent from 'superagent';
import Promise from 'bluebird';
import {
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILURE,
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
    getFeed: (params = 'http://www.abc.net.au/news/feed/45910/rss.xml') => {
      const baseEndPoint = 'https://api.rss2json.com/v1/api.json';

      getPromise(baseEndPoint, { rss_url: params })
      .then(() => {

      })
      .catch(() => {

      });
    },
  };
};

export default mapDispatchToProps;
