import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-elements';
import {Colors} from '../styles/Colors';
import Form from '../components/Form';
import Button from '../components/Button';
import {useApi} from '../utils/APIProvider';

const Profile = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const {useFetch} = useApi();

  const updateUser = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#993DD1', '#FFFFFF00']} style={styles.header}>
        <LinearGradient colors={['#531B6D', '#74F7B880']} style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </LinearGradient>
      </LinearGradient>
      <View style={styles.content}>
        <View style={styles.forms}>
          <Form
            text="Fistname & lastname"
            icon="user"
            onChangeText={name => setName(name)}
          />
          <Form
            text="Address"
            icon="user"
            onChangeText={address => setAddress(address)}
          />
          <Form
            text="Phone Number"
            icon="user"
            isPhoneNumber
            onChangePhoneText={phone => setPhone(phone)}
          />

          <View style={styles.button}>
            <Button
              text="SAVE YOUR PROFILE"
              iconName="arrow-right-l"
              iconType="fontisto"
              onPress={() => updateUser()}
            />
          </View>
        </View>
      </View>
      <Avatar
        rounded
        size="large"
        source={require('../../assets/profile.jpg')}
        containerStyle={styles.avatar}
      />
      <View style={styles.profile}>
        <Text style={styles.name}>Carolina Johnson</Text>
        <Text style={styles.country}>Miami, United States</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    flex: 4,
  },
  content: {
    flex: 8,
    backgroundColor: 'white',
  },
  forms: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24.38,
    textAlign: 'center',
    marginTop: 50,
  },
  profile: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'center',
    top: 180,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 20,
    elevation: 10,
  },
  name: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 29.26,
    color: Colors.name,
    textAlign: 'center',
  },
  country: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17.07,
    color: Colors.country,
  },
  avatar: {
    position: 'absolute',
    alignSelf: 'center',
    top: 140,
    elevation: 11,
    borderWidth: 2,
    borderColor: 'white',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
});

export default Profile;
