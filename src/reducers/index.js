import { combineReducers } from 'redux';
import WeatherAction from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherAction
});

export default rootReducer;
