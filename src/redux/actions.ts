import {Action} from 'redux';

export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASK_COMPLETED = 'SET_TASK_COMPLETED';
export const ADD_MATERIAL_ITEM_TO_TASK = 'ADD_MATERIAL_ITEM_TO_TASK';
export const SET_TASK_TIME = 'SET_TASK_TIME';
export const RETRIEVE_STORED_TASKS = 'RETRIEVE_STORED_TASKS';
export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';

export interface CreateTaskAction extends Action<'CREATE_TASK'> {
  type: 'CREATE_TASK';
  payload: string;
}

export interface SetTasksFromAsyncStoreAction
  extends Action<'RETRIEVE_STORED_TASKS'> {
  type: 'RETRIEVE_STORED_TASKS';
  payload: Array<string>;
}

export type TaskActions = CreateTaskAction | SetTasksFromAsyncStoreAction;

export const createTask = (task: string): CreateTaskAction => {
  return {
    type: CREATE_TASK,
    payload: task,
  };
};

export const setTasksFromAsyncStore = (
  tasks: Array<string>,
): SetTasksFromAsyncStoreAction => {
  return {
    type: RETRIEVE_STORED_TASKS,
    payload: tasks,
  };
};
