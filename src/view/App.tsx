import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-community/async-storage";
import {HomeComponent} from "./containers/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from "react-native";

const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          children={() => (
            <HomeComponent
              handleChange={handleChange}
              handlePress={handlePress}
              tasks={props.tasks}
            />
          )}
        />
        <Tab.Screen name="Test" component={View} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
