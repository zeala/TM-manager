import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

import {Form} from '../components/Form';
import {AppState} from '../redux/store';
import {TextOutput} from "../components/TextOutput";

interface AppProps {
  createTask: (task: string) => void;
  tasks: Array<string>;
}

const App = (props: AppProps) => {
  const [newTask, setNewTask] = useState('');
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

const CREATE_TASK = 'CREATE_TASK';

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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
