import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen!!!</Text>
      <Button title='Go to Components Demo' onPress={() => navigation.navigate('Components')} />
      <Button title='Go to List Screen' onPress={() => navigation.navigate('List')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
