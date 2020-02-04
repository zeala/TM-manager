import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ITextOutput {
  tasks: Array<string>;
}

export const TextOutput = (props: ITextOutput) => {
  return (
    <View>
      {props.tasks.map((t, idx) => (
        <Text key={idx} style={styles.txtOutput}>
          {t}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  txtOutput: {
    height: 30,
    width: '80%',
    backgroundColor: 'cornsilk',
    marginBottom: 3,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
})
