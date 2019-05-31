import { SET_VALUES } from "./types";

export const setValues = data => {
  return {
    type: SET_VALUES,
    payload: data
  };
};
