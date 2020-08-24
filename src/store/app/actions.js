import { SET_THEME } from "./types";

//Action to buy cake
export const setTheme = () => {
  return {
    type: SET_THEME,
  };
};

const appActions = {
  setTheme,
};

export default appActions;
