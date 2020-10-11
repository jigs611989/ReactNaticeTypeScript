export type SaveNameAction = { type: 'SAVE_NAME'; name: string };

const saveName = (name: string): SaveNameAction => {
  return {
    type: 'SAVE_NAME',
    name,
  };
};

export { saveName };
