import {GET_DATA, LOADED_SUCCESS, LOADED_FAIL} from './types';
import {API_KEY} from 'react-native-dotenv';

export const fetchNews = () => (dispatch, getState) => {
  return dispatch({
    type: GET_DATA,
    payload: {
      request: {
        url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
      },
      options: {
        async onSuccess({response: {data}}) {
          dispatch({
            type: LOADED_SUCCESS,
            payload: {
              news: data.data,
            },
          });
        },
        onError({error}) {
          dispatch({
            type: LOADED_FAIL,
            payload:
              error.response?.data?.message?.error ||
              error.response?.data?.message ||
              'Internal Server Error',
          });
        },
      },
    },
  });
};
