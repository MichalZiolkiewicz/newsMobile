import {GET_DATA, LOADED_SUCCESS, LOADED_FAIL} from './types';
import {API_KEY} from 'react-native-dotenv';
import axios from 'axios';

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then((response) => {
        const news = response.data;
        dispatch(fetchNewsSuccess(news));
      })
      .catch((error) => {
        dispatch(fetchNewsFailure(error.message));
      });
  };
};

export const fetchNewsRequest = () => {
  return {
    type: GET_DATA,
  };
};
export const fetchNewsSuccess = (news) => {
  return {
    type: LOADED_SUCCESS,
    payload: news,
  };
};
export const fetchNewsFailure = (error) => {
  return {
    type: LOADED_FAIL,
    payload: error,
  };
};
