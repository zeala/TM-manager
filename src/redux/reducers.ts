import {AnyAction, combineReducers} from 'redux';
import {AppState} from './store';

export const CREATE_TASK = 'CREATE_TASK';
export const RETRIEVE_STORED_TASKS = 'RETRIEVE_STORED_TASKS';

const user = (state: AppState = {tasks: []}, _action: AnyAction) => {
  return state;
};

const tasks = (state = [], action: AnyAction) => {
  switch (action.type) {
    case CREATE_TASK:
      return [action.payload, ...state];
    case RETRIEVE_STORED_TASKS:
      console.log('::: RETRIEVE_STORED_TASKS [...action.payload] ::: ', [
        ...action.payload,
      ]);
      return [...action.payload];
    default:
      return state;
  }
};

export const reducers = combineReducers({tasks, user});
