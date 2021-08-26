import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import FormButton from '../../components/FormButton';
import {AuthContext} from '../../router/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.page}>
      <Text>Welcome {user.email} </Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
});
