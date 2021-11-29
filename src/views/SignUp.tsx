import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import User from '../api/user';
import Button from '../components/Button';
import ButtonFacebook from '../components/ButtonFacebook';
import Checkbox from '../components/CheckBox';
import Form from '../components/Form';
import {Colors} from '../styles/Colors';
import {useApi} from '../utils/APIProvider';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const {useFetch} = useApi();

  const signUp = () => {
    let user = {email: email, username: username, password: password};
    if (!toggleCheckBox) alert('Veuillez accepter les conditions');
    else {
      useFetch(() => User.createUser(user))
        .then(response => navigation.navigate('Profile'))
        .catch(err => {
          alert(err);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>
      <Text style={styles.subtitle}>Create an account to continue!</Text>
      <View style={styles.form}>
        <Form
          text="Email"
          icon="mail"
          onChangeText={email => setEmail(email)}
          keyboardType="email-address"
        />
        <Form
          text="Username"
          icon="user"
          onChangeText={username => setUsername(username)}
        />
        <Form
          text="Password"
          icon="lock"
          isSecureText={true}
          onChangeText={password => setPassword(password)}
        />
        <Checkbox
          value={toggleCheckBox}
          onValueChange={value => setToggleCheckBox(value)}
        />
      </View>

      <View style={styles.footer}>
        <Button
          text="SIGN UP"
          iconName="sign-in"
          iconType="font-awesome"
          onPress={() => signUp()}
        />
        <Text style={styles.signUp}>
          Already have an account?{' '}
          <Text
            style={[
              styles.signUp,
              {fontWeight: '700', color: Colors.blackB100},
            ]}
            onPress={() => navigation.navigate('SignIn')}>
            Sign in
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
    borderWidth: 1,
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
  },
});

export default SignUp;
