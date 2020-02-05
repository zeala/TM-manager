import {AnyAction} from "redux";
import {
  ADD_MATERIAL_ITEM_TO_TASK,
  CREATE_TASK,
  RETRIEVE_STORED_TASKS,
} from '../actions';

export const tasks = (state = [], action: AnyAction) => {
  switch (action.type) {
    case CREATE_TASK:
      return [action.payload, ...state];
    case ADD_MATERIAL_ITEM_TO_TASK:
      return state;
    case RETRIEVE_STORED_TASKS:
      return [...action.payload];
    default:
      return state;
  }
};
