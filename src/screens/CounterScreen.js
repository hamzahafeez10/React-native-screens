import React,{useReducer} from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const reducer = (state, action) =>{
    switch(action.counterAction)
    {
        case 'increment':
            return {...state, count: state.count + action.value} 
        case 'decrement':
            return {...state, count: state.count + action.value}
        default:
            return state;
    }    
}

const CounterScreen = () =>{
    const [state, dispatch] = useReducer(reducer, {count:0});
    const {count} = state;    
    // let [counter, setCounter] = useState(0);

    return (
        <View>
            {/* <Button 
            title="Increase"
            onPress={()=>setCounter(counter+1)}
            />
            <Button 
            title="Decrease"
            onPress={()=>setCounter(counter-1)}
            /> */}

            <Button     
            title="Increase"
            onPress={()=>dispatch({counterAction:'increment',value:1})}
            />
            <Button 
            title="Decrease"
            onPress={()=>dispatch({counterAction:'decrement',value:-1})}
            />
            <Text>Current Count: {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CounterScreen;