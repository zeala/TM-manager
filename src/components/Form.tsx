import React, {useRef} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

interface FormProps {
  handleChange: (text: string) => void;
  handlePress: (txt: string) => void;
}

const screen = Dimensions.get('window');

export const Form = (props: FormProps) => {
  const inputField: any = useRef(null);

  const handlePress = () => {
    console.log(
      ' ::: handlePress, inputField.lastNativeText :: ',
      inputField.current._lastNativeText,
    );
    props.handlePress(inputField!.current!._lastNativeText);
    inputField.current.clear();

  };

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          ref={inputField}
          clearButtonMode="always"
          style={styles.textInput}
          onChangeText={text => props.handleChange(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handlePress}>
          <Text style={styles.buttonLabel}>Add to list updated</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
    height: 100,
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: 'blue',
    backgroundColor: '#dfdfdf',
    marginLeft: 5,
    // width: screen.width / 2 - 45,
  },
  buttonLabel: {
    color: 'orange',
  },
  textInput: {
    backgroundColor: 'cornsilk',
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 1,
    height: 40,
    width: '40%', // screen.width / 2,
    fontSize: 20,
  },
  listItem: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: 30,
  },
  listItemText: {
    fontSize: 18,
  },
  sectionContainer: {
    marginTop: 32,
    padding: 20,
    flex: 1,
    color: 'blue',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
  },
});
