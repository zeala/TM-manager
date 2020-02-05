import { createStore } from 'redux';
import {index} from './reducers';

export interface AppState {
  readonly tasks: Array<string>;
}

export const store = createStore(index);
