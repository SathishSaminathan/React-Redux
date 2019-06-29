import { SET_VALUES, SET_FONTS } from "./types";

export const setValues = data => {
  return {
    type: SET_VALUES,
    payload: data
  };
};

export const setFontStyle = fontSize => {
  return {
    type: SET_FONTS,
    payload: fontSize
  };
};
