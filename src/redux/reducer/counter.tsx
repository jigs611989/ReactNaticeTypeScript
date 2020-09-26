const INIT_STATE = {
  counter: 0,
};

type AppState = {};
type Action =
  | { type: 'INCREMENT'; payload: number }
  | { type: 'DECREMENT'; payload: number };

const counterReducer = (
  state: AppState = INIT_STATE,
  action: Action,
): AppState => {
  switch (action.type) {
    case 'DECREMENT':
      return { ...state, counter: action.payload - 1 };
    case 'INCREMENT':
      return { ...state, counter: action.payload + 1 };
  }
};

export default counterReducer;
