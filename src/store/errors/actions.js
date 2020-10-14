import { GET_ERRORS, CLEAR_ERRORS } from "./types";

//Action to buy cake
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

const errorActions = {
  returnErrors,
  clearErrors,
};

export default errorActions;
