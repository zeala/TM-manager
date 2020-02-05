import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Form} from '../../components/Form';
import {TextOutput} from '../../components/TextOutput';

interface HomeProps {
  handleChange: (task: string) => void;
  handlePress: (txt: string) => void;
  tasks: Array<string>;
}

export const HomeComponent = (props: HomeProps) => {
  return (
    <View>
      <Form handleChange={props.handleChange} handlePress={props.handlePress} />
      <TextOutput tasks={props.tasks} />
    </View>
  );
};

export default connect(
  null,
  null,
)(HomeComponent);
