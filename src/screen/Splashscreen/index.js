import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {ILLogo} from '../../asset';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 1500);
  });
  return (
    <SafeAreaView style={styles.page}>
      <Image source={ILLogo} style={styles.logo} />
    </SafeAreaView>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 160,
    width: 160,
  },
});
