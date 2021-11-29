import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import User from '../api/user';
import Button from '../components/Button';
import ButtonFacebook from '../components/ButtonFacebook';
import Form from '../components/Form';
import {Colors} from '../styles/Colors';
import {useApi} from '../utils/APIProvider';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {useFetch} = useApi();

  const signIn = () => {
    let user = {username: username, password: password};
    useFetch(() => User.signIn(user))
      .then(response => navigation.navigate('Profile'))
      .catch(err => {
        alert(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Let’s Sign You In</Text>
      <Text style={styles.subtitle}>Welcome back, you’ve been missed!</Text>
      <View style={styles.form}>
        <Form
          text="Username or Email"
          icon="user"
          onChangeText={username => setUsername(username)}
        />
        <Form
          text=" Password"
          icon="lock"
          isSecureText={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <View style={styles.footer}>
        <Button
          text="SIGN IN"
          iconName="sign-in"
          iconType="font-awesome"
          onPress={() => signIn()}
        />
        <Text style={styles.signUp}>
          Don't have an account?{' '}
          <Text
            style={[
              styles.signUp,
              {fontWeight: '700', color: Colors.blackB100},
            ]}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Text>
        </Text>
        <View style={styles.facebook}>
          <ButtonFacebook />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.8,
    color: Colors.blackB100,
    paddingTop: 20,
  },
  subtitle: {
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.4,
    opacity: 0.6,
    color: Colors.blackB100,
    marginTop: 10,
  },
  form: {
    marginTop: 50,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  signUp: {
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18.23,
    color: Colors.blackB60,
    textAlign: 'center',
    marginTop: 20,
  },
  facebook: {
    marginTop: 50,
    paddingBottom: 20,
  },
});

export default SignIn;
