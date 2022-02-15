import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button 
      style={styles.button}
      onPress={()=>navigation.navigate('Component')}
      title="Go To Components Demo"
      />
      <View style={styles.space} />
      <Button 
      style={styles.button}
      title="Go To List Component"
      onPress={()=>navigation.navigate('List')}
      />
      <View style={styles.space} />
      <Button 
      style={styles.button}
      title="Go To Image Component"
      onPress={()=>navigation.navigate('Image')}
      />
      <View style={styles.space} />
      <Button
      style={styles.button}
      title="Go To Counter Component"
      onPress={()=>navigation.navigate('Counter')}
      />
      <View style={styles.space} />
      <Button
      style={styles.button}
      title="Go To Color Component"
      onPress={()=>navigation.navigate('Color')}
      />
      <View style={styles.space} />
      <Button
      style={styles.button}
      title="Go To Square Screen Component"
      onPress={()=>navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});

export default HomeScreen;
