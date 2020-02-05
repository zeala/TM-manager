import {Action} from 'redux';

export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASK_COMPLETED = 'SET_TASK_COMPLETED';
export const ADD_MATERIAL_ITEM_TO_TASK = 'ADD_MATERIAL_ITEM_TO_TASK';
export const SET_TASK_TIME = 'SET_TASK_TIME';
export const RETRIEVE_STORED_TASKS = 'RETRIEVE_STORED_TASKS';
export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';

export interface CreateTaskAction extends Action<'CREATE_TASK'> {
  type: 'CREATE_TASK';
  payload: any;
}

export type TaskActions = CreateTaskAction;
