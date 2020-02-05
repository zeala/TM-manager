import {combineReducers} from 'redux';
import {tasks} from './tasks';
import {user} from './user';
import {ui} from './ui';

export const index = combineReducers({tasks, ui, user});
