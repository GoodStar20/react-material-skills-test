import { GET_LISTS } from "../types";

let initialState = {
  lists: [],
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.lists,
      };
    default:
      return state;
  }
};
