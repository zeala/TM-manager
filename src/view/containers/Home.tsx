import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Form} from '../../components/Form';
import {TextOutput} from '../../components/TextOutput';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TopBar} from '../../components/TopBar';

interface HomeProps {
  handleChange: (task: string) => void;
  handlePress: (txt: string) => void;
  tasks: Array<string>;
}

export const HomeComponent = (props: HomeProps) => {
  return (
    <LinearGradient colors={['#ccc', '#f3c']} style={{height: '100%'}}>
      <TopBar styles={styles.topBar}>
        <Text style={styles.topBarText}>Current Tab</Text>
      </TopBar>
      <Form handleChange={props.handleChange} handlePress={props.handlePress} />
      <TextOutput tasks={props.tasks} />
      <Icon
        name="facebook"
        size={30}
        style={{
          width: 150,
          height: 50,
          position: 'absolute',
          top: '50%',
          alignSelf: 'center',
        }}
        color="blue">
        <Text style={{fontSize: 12}}>Login with Facebook</Text>
      </Icon>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  topBarText: {
    color: 'yellow',
    fontSize: 30,
  },
})

export default connect(
  null,
  null,
)(HomeComponent);
