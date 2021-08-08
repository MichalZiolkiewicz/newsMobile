import {GET_DATA, LOADED_FAIL, LOADED_SUCCESS} from './types';

const initialState = {
  news: {},
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
        error: null,
        news: {},
      };

    case LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };

    case LOADED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
