import { TOGGLE_THEME } from "./types";
const initialTheme = {
	theme: "darkTheme",
};

const appReducer = (state = initialTheme, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return {
				...state,
				theme: state.theme === "darkTheme" ? "lightTheme" : "darkTheme",
			};
		default:
			return state;
	}
};

export default appReducer;
