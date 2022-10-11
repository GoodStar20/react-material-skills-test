import { GET_LISTS } from "../types";

export const addList = (list) => (dispatch, getState) => {
  const { todoList } = getState();
  const { lists } = todoList;
  dispatch({ type: GET_LISTS, lists: [...lists, list] });
};

export const deleteList = (lists) => (dispatch) => {
  dispatch({ type: GET_LISTS, lists });
};
