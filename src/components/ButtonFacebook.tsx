import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../styles/Colors';

const ButtonFacebook = props => {
  return (
    <View style={styles.container}>
      <Icon
        name="facebook"
        type="font-awesome-5-brands"
        size={22}
        color="white"
        tvParallaxProperties={undefined}
      />
      <Text style={styles.text}>Connect with Facebook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.facebook,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: 'white',
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.8,
    marginLeft: 5,
  },
});

export default ButtonFacebook;
