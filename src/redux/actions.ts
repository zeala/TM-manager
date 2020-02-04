import {Action} from 'redux';

const CREATE_TASK = 'CREATE_TASK';

export interface CreateTaskAction extends Action<'CREATE_TASK'> {
  type: 'CREATE_TASK';
  payload: any;
}

export type TaskActions = CreateTaskAction;
