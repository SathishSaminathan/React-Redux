import { combineReducers } from "redux";

import { SET_VALUES, SET_FONTS } from "../actions/types";

const initialValue = {
  hotelList: []
};

const fontInitialValue = {
  fontSize: "10px"
};

const setValueReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_VALUES:
      return {
        hotelList: action.payload
      };

    default:
      return state;
  }
};

const setFontSizeReducer = (state = fontInitialValue, action) => {
  switch (action.type) {
    case SET_FONTS:
      return {
        fontSize: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataSource: setValueReducer,
  fontStyle: setFontSizeReducer
});

export default rootReducer;
