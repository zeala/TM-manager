import {AnyAction} from 'redux';
import {SET_MODAL_VISIBILITY} from '../actions';

const INITIAL_STATE = {
  modalVisible: false
}

export const ui = (state: any = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {...state, modalVisible: action.payload};
    default:
      return state;
  }
};
