import {AnyAction, combineReducers} from 'redux';

export const CREATE_TASK = 'CREATE_TASK';

const user = (state = {}, _action: AnyAction) => {
  return state;
};

const tasksReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case CREATE_TASK:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const reducers = combineReducers({tasksReducer, user});
