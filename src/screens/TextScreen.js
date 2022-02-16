import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

const TextScreen = () =>{

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View>
            <Text>Enter Name: </Text>
            <TextInput style={styles.text} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue)=>setName(newValue)}
            />
            <Text>My name is: {name}</Text>

            <Text>Enter Password:</Text>
            <TextInput 
            style={styles.text}
            autoCapitalize="none"
            autoCorrect={false}
            value = {password}
            onChangeText = {setPassword}
            />
            {password.length >= 5 ? null: <Text style={styles.warning}>Your password should be greater than or equal to 5 characters</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:15,
        borderColor: 'black',
        borderWidth: 1
    },
    warning:{
        color:'red'
    }
});

export default TextScreen;