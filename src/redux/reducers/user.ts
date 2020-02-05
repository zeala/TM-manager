import {AppState} from '../store';
import {AnyAction} from 'redux';

export const user = (state: AppState = {tasks: []}, _action: AnyAction) => {
  return state;
};
