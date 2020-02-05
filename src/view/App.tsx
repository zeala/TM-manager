import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {AppState} from '../redux/store';
import {createTask, setTasksFromAsyncStore} from '../redux/actions';
import {HomeComponent} from './containers/Home';

interface AppProps {
  createTask: (task: string) => void;
  setTasksFromAsyncStore: (tasks: Array<string>) => void;
  tasks: Array<string>;
}

const App = (props: AppProps) => {
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    async function retrieveAsyncStore() {
      const retrievedTasks = (await AsyncStorage.getItem('tasks')) || '{}';
      props.setTasksFromAsyncStore(JSON.parse(retrievedTasks));
    }
    retrieveAsyncStore();
  }, []);

  useEffect(() => {
    async function updateAsyncStore() {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(props.tasks));
      } catch (e) {
        console.log(' e : ', e);
      }
    }
    updateAsyncStore();
    return function cleanup() {
      console.log(' ::: will cleanup after unmounting ');
    };
  }, [props.tasks])

  const handleChange = (text: string) => {
    setNewTask(text);
  };
  const handlePress = (txt: string) => {
    props.createTask(txt);
  };
  return (
    <HomeComponent
      handleChange={handleChange}
      handlePress={handlePress}
      tasks={props.tasks}
    />
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    tasks: state.tasks,
  };
}

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
