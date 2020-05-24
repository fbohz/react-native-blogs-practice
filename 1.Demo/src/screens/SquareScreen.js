import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColorCounter'

const COLOR_CHANGE = 5

const myReducer = (state, action) => {
    // state is initialized with the object with rgb default colors
    // action is how you change state object. With colorToChange and value.

    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? 
                state : {...state, red: state.red + action.amount}
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? 
            state : {...state, green: state.green + action.amount}
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? 
            state : {...state, blue: state.blue + action.amount}
        default:
            return state;
    }

}

const SquareScreen = () => {
    //every time useReducer is called the component gets re-render.
    // dispatch is like saying run my reducer.
    const [ state, dispatch ] = useReducer(myReducer, { red: 0, green: 0, blue: 0})
    const { red, green, blue } = state

    const setColor = (color, change) => {
        // color is red, green or blue as String.
        // change is either +COLOR_CHANGE or -COLOR_CHANGE


    }

    return (
        <View>
            <ColorCounter 
            onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_CHANGE })} 
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_CHANGE })}
            color="Red" />

            <ColorCounter color="Blue"
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_CHANGE })} 
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_CHANGE })}
            />

            <ColorCounter color="Green" 
            onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_CHANGE })} 
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_CHANGE })}
            />

            <Text> Current Color: {`${red}, ${green}, ${blue}`}</Text>
            <View style={{ height: 150, width: 150, 
             backgroundColor: `rgb(${red}, ${green}, ${blue})`  }}
             />
        </View>
    )
}

const styles = StyleSheet.create({
 
})

export default SquareScreen