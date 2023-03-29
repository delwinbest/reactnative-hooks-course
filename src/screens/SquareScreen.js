import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const COLOR_INCREMENT = 10;
  [red, setRed] = useState(0);
  [green, setGreen] = useState(0);
  [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        if (red + change < 0 || red + change > 255) return;
        setRed(red + change);
        return;
      case 'blue':
        if (blue + change < 0 || blue + change > 255) return;
        setBlue(blue + change);
        return;
      case 'green':
        if (green + change < 0 || green + change > 255) return;
        setGreen(green + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color='Red'
        value={red}
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        value={blue}
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        value={green}
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -COLOR_INCREMENT)}
      />
      <View
        style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
