import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../redux/store';
import {createTask, setTasksFromAsyncStore} from '../redux/actions';
import App from './App';

const mapStateToProps = (state: AppState) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task: string) => {
      dispatch(createTask(task));
    },
    setTasksFromAsyncStore: (tasks: Array<string>) => {
      dispatch(setTasksFromAsyncStore(tasks));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
