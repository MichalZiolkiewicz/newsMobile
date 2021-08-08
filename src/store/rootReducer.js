import {combineReducers} from 'redux';

import {newsReducer} from './reducer';

export const rootReducer = combineReducers({
  news: newsReducer,
});
