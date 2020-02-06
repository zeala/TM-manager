import React from 'react';
import {View, StyleSheet} from 'react-native';

interface TopBarProps {
  styles?: object;
  children: any;
}

export const TopBar = (props: TopBarProps) => {
  return (
    <View style={{...styles.container, ...props.styles}}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 10,
  },
});
