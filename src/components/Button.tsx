import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {Colors} from '../styles/Colors';

interface Props extends TouchableOpacityProps {
  text: string;
  iconName: string;
  iconType: string;
  style?: any;
}

const Button = (props: Props) => {
  return (
    <View>
      <TouchableOpacity {...props} style={props.style && props.style}>
        <LinearGradient
          colors={[Colors.gradient01, Colors.gradient02]}
          style={styles.button}>
          <Text style={styles.text}>{props.text}</Text>
          <Icon
            name={props.iconName}
            type={props.iconType}
            size={22}
            color="white"
            tvParallaxProperties={undefined}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
  },
});

export default Button;
