import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, NativeSyntheticEvent, TextInputChangeEventData,
} from 'react-native';

import {Form} from './src/components/Form';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const handleChange = (text: string) => {
    console.log(' ::: handler change: newTask, text :: ', newTask, text);
    setNewTask(text);
  };
  const handlePress = (txt: string) => {
    console.log(' ::: handlePress, txt :: ', txt);
  };
  return (
    <>
      <View>
        <Form handleChange={handleChange} handlePress={handlePress} />
      </View>
    </>
  );
};

export default App;
