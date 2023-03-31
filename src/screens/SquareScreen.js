import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
  // state === { red: 0, green: 0, blue: 0 }
  // OLD: action === { colorToChange: 'red'||'green'||'blue', amount 15|-15}
  // action === { type: 'change_red'||'change_green'||'change_blue', payload 15|-15}

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload < 0 || state.red + action.payload > 255
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload < 0 || state.green + action.payload > 255
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload < 0 || state.blue + action.payload > 255
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color='Blue'
        value={blue}
        onIncrease={() => {
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color='Green'
        value={green}
        onIncrease={() => {
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT });
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
