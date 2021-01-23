import { combineReducers } from 'redux';
import albums from './albums';
import albumView from './albumView';

const rootReducer = combineReducers({
  albums,
  albumView,
});

export default rootReducer;
