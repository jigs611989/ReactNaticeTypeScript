import { SaveNameAction } from '../action/name';

const INIT_STATE = {
  name: '',
};

type AppState = {
  name: string
};

const nameReducer = (
  state: AppState = INIT_STATE,
  action: SaveNameAction,
): AppState => {
  if (action.type === 'SAVE_NAME') {
    return { ...state, name: action.payload };
  }
  return state;
};

export default nameReducer;
