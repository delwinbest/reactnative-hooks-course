import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
  // state === { red: 0, green: 0, blue: 0 }
  // action === { colorToChange: 'red'||'green'||'blue', amount 15|-15}

  switch (action.colorToChange) {
    case 'red':
      if (state.red + action.amount < 0 || state.red + action.amount > 255) return { ...state };
      return { ...state, red: state.red + action.amount };
    case 'green':
      if (state.green + action.amount < 0 || state.green + action.amount > 255) return { ...state };
      return { ...state, green: state.green + action.amount };
    case 'blue':
      if (state.blue + action.amount < 0 || state.blue + action.amount > 255) return { ...state };
      return { ...state, blue: state.blue + action.amount };
    default:
      return;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color='Red'
        value={red}
        onIncrease={() => {
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color='Blue'
        value={blue}
        onIncrease={() => {
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color='Green'
        value={green}
        onIncrease={() => {
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT });
        }}
      />
      <View
        style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
