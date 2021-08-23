import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {windowHeight} from '../utils/Dimenstions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <Pressable style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
