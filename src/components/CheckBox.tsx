import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckBox, {CheckBoxProps} from '@react-native-community/checkbox';

interface Props extends CheckBoxProps {}

const Checkbox = (props: Props) => {
  return (
    <View style={styles.container}>
      <CheckBox
        {...props}
        disabled={false}
        tintColors={{true: 'black', false: 'black'}}
      />
      <Text style={styles.text}>
        By creating an account, you agree to our{'\n'}
        <Text style={[styles.text, {fontWeight: '700'}]}>
          Term & Conditions
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: -0.2,
    marginLeft: 10,
  },
});

export default Checkbox;
