import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  if (action.type) {
    if (action.type == FETCH_WEATHER) {
      console.log('action received')
      return [ action.type.payload, ...state ];
    }
  }

  return state
}
