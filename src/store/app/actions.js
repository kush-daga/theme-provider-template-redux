import { TOGGLE_THEME } from "./types";

//Action to buy cake
export const toggleTheme = () => {
	return {
		type: TOGGLE_THEME,
	};
};

const appActions = {
	toggleTheme,
};

export default appActions;
