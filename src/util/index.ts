import { regex } from '../constant/AppConstant';
const isValidName = (name: string): boolean => {
  if (name.match(regex.name)) {
    return true;
  }
  return false;
};

export { isValidName };
