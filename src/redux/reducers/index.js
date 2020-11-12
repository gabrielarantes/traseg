import * as appReducer from './appReducer';
import * as netInfoReducer from './netInfoReducer';

export default Object.assign(
  appReducer,
  netInfoReducer,
);