import {AnyAction} from 'redux';
import {SET_MODAL_VISIBILITY} from '../actions';

export const ui = (state: any, action: AnyAction) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {...state, modalVisibility: action.payload};
    default:
      return state;
  }
};
