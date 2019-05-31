import { combineReducers } from "redux";

import { SET_VALUES } from "../actions/types";

const initialValue = {
  hotelList: []
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

const rootReducer = combineReducers({ dataSource:setValueReducer });

export default rootReducer;
