import { Action } from "redux";

const initialState = {};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
