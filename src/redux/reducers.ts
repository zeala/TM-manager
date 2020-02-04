import {AnyAction, combineReducers} from 'redux';
import {AppState} from './store';

export const CREATE_TASK = 'CREATE_TASK';

const user = (state: AppState = {tasks: []}, _action: AnyAction) => {
  return state;
};

const tasks = (state = [], action: AnyAction) => {
  switch (action.type) {
    case CREATE_TASK:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const reducers = combineReducers({tasks, user});
