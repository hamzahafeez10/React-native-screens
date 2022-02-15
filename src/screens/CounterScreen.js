import React,{useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const CounterScreen = () =>{
    let [counter, setCounter] = useState(0);

    return (
        <View>
            <Button 
            title="Increase"
            onPress={()=>setCounter(counter+1)}
            />
            <Button 
            title="Decrease"
            onPress={()=>setCounter(counter-1)}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CounterScreen;