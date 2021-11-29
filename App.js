import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {APIProvider} from './src/utils/APIProvider';
import Navigation from './src/routes/Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <APIProvider>
          <Navigation />
        </APIProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
