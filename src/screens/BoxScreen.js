import React from "react";
import {View, Text, StyleSheet} from "react-native";

const BoxScreen = () =>{
    return(
        <View style={styles.viewStyle}>
            <View style={styles.red}></View>
            <View style={styles.green}></View>
            <View style={styles.blue}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        flexDirection: 'row'
    },
    red: {
        height:100,
        width:100,
        flex:1,
        backgroundColor:'red',
        borderWidth:1,
        borderColor:'black',
    },
    green: {
        height:100,
        width:100,
        flex:1,
        backgroundColor:'green',
        borderWidth:1,
        borderColor:'black',
        position:"absolute",
    },
    blue: {
        height:100,
        width:100,
        flex:1,
        backgroundColor:'blue',
        borderWidth:1,
        borderColor:'black',
    }
});

export default BoxScreen;