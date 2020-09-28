export type SaveNameAction = { type: 'SAVE_NAME'; payload: string };

const saveName = (name: string): SaveNameAction => {
  return {
    type: 'SAVE_NAME',
    payload: name,
  };
};

export { saveName };
