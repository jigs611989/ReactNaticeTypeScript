import { createStore } from 'redux';
import nameReducer from './reducer/name';

const createReduxStore = () => {
  const store = createStore(nameReducer);
  return store;
};

export { createReduxStore };
