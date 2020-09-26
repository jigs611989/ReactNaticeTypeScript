import { createStore } from 'redux';
import counterReducer from './reducer/counter';

const createReduxStore = () => {
  const store = createStore(counterReducer);
  return store;
};

export { createReduxStore };
