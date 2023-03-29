import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const COLOR_INCREMENT = 10;
  [red, setRed] = useState(0);
  [green, setGreen] = useState(0);
  [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color='Red'
        value={red}
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        value={blue}
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        value={green}
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
      />
      <View
        style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
