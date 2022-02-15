import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentScreen = () =>{
    const name = 'Hamza Hafeez';
    return(
        <View>
            <Text style={styles.header}>Getting started with React Native!</Text>
            <Text style={styles.heading}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        fontSize:45,
    },
    heading:{
        fontSize:30,
    }
});

export default ComponentScreen;