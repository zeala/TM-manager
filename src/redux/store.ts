import { createStore } from 'redux';
import {reducers} from './reducers';

export interface AppState {
  readonly tasks: Array<string>;
}

export const store = createStore(reducers);
