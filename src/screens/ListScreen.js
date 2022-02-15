import React from "react";
import {Text, View, StyleSheet,FlatList} from "react-native";

const ListScreen = () =>{
    const users =[
        {name:'User 1', age:1},
        {name:'User 2', age:2},
        {name:'User 3', age:3},
        {name:'User 4', age:4},
        {name:'User 5', age:5},
        {name:'User 6', age:6},
        {name:'User 7', age:7},
        {name:'User 8', age:8},
        {name:'User 9', age:9},
        {name:'User 10', age:10},
        {name:'User 11', age:11},
    ]
    return(
        <FlatList 
        keyExtractor={users=>users.name}
        data={users} 
        renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text> 
        }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50,
    }
});

export default ListScreen;