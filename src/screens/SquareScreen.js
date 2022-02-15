import React, { useReducer } from "react";
import {View, StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) =>{
    switch(action.color)
    {
        case "red":
            return { ...state, red: state.red + action.amount };
        case "green":
            return { ...state, green: state.green + action.amount };
        case "blue":
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () =>{
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    
    const {red,green,blue} = state;

    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change)=>{
    //     switch(color){
    //         case 'red':
    //             red+change > 255||red+change < 0 ? null : setRed(red+change);
    //             return;
    //         case 'green':
    //             green+change > 255||green+change < 0 ? null : setGreen(green+change);
    //             return;
    //         case 'blue':
    //             blue+change > 255||blue+change < 0 ? null : setBlue(blue+change);
    //             return;
    //         default:
    //             return;
    //     }
    // }

    return (
        <View>
            {/* <ColorCounter 
            color="Red" 
            onIncrease={()=>setColor('red',COLOR_INCREMENT)} 
            onDecrease={()=>setColor('red',-1*COLOR_INCREMENT)}/>
            <ColorCounter 
            color="Blue" 
            onIncrease={()=>setColor('blue',COLOR_INCREMENT)} 
            onDecrease={()=>setColor('blue',-1*COLOR_INCREMENT)}/>
            <ColorCounter 
            color="Green" 
            onIncrease={()=>setColor('green',COLOR_INCREMENT)} 
            onDecrease={()=>setColor('green',-1*COLOR_INCREMENT)}/> */}

            <ColorCounter 
            color="Red" 
            onIncrease={()=>dispatch({color:'red', amount:COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({color:'red', amount:-1 * COLOR_INCREMENT})}/>
            <ColorCounter 
            color="Blue" 
            onIncrease={()=>dispatch({color:'blue', amount:COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({color:'blue', amount:-1 * COLOR_INCREMENT})}/>
            <ColorCounter 
            color="Green" 
            onIncrease={()=>dispatch({color:'green', amount:COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({color:'green', amount:-1 * COLOR_INCREMENT})}/>

            <View style={{width:150, height:150, backgroundColor:`rgb(${red},${green},${blue})`}}></View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;