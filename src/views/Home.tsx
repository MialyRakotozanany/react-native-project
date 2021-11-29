import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Button from '../components/Button';
import {Colors} from '../styles/Colors';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to your world !</Text>
          <Text style={styles.subtitle}>
            With long experience in the audio industry, we create the best
            quality products
          </Text>
          <Button
            text="GET STARTED"
            iconName="arrow-right-l"
            iconType="fontisto"
            style={styles.button}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  title: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.8,
    textAlign: 'center',
    color: Colors.blackB100,
  },
  subtitle: {
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.4,
    textAlign: 'center',
    opacity: 0.6,
    color: Colors.blackB100,
    padding: 25,
  },
  button: {
    paddingTop: 20,
    paddingBottom: 60,
  },
});

export default Home;
