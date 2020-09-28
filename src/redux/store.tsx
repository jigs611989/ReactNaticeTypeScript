import { createStore } from 'redux';
import counterReducer from './reducer/name';

const createReduxStore = () => {
  const store = createStore(counterReducer);
  return store;
};

export { createReduxStore };
