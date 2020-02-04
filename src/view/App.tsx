import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Form} from '../components/Form';
import {AppState} from '../redux/store';
import {TextOutput} from '../components/TextOutput';
import { CREATE_TASK, RETRIEVE_STORED_TASKS } from '../redux/reducers';

interface AppProps {
  createTask: (task: string) => void;
  setTasksFromAsyncStore: (tasks: Array<string>) => void;
  tasks: Array<string>;
}

const App = (props: AppProps) => {
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    async function retrieveAsyncStore() {
      console.log(' --- retrieving async store');
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
    <>
      <View>
        <Form handleChange={handleChange} handlePress={handlePress} />
        <TextOutput tasks={props.tasks} />
      </View>
    </>
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
      dispatch({
        type: CREATE_TASK,
        payload: task,
      });
    },
    setTasksFromAsyncStore: (tasks: Array<string>) => {
      dispatch({
        type: RETRIEVE_STORED_TASKS,
        payload: tasks,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
