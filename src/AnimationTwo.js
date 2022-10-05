import {StyleSheet, Text, View, Animated, Easing, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const AnimationTwo = () => {
  const [redSquare, setRedSquare] = useState(new Animated.Value(1));
  const [greenSquare, setGreenSquare] = useState(new Animated.ValueXY(0, 0));
  const [blueSquare, setBlueSquare] = useState(new Animated.ValueXY(0, 0));

  const squareAnimation = () => {
    Animated.sequence([
      Animated.timing(redSquare, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
      //  Animated.parallel 동시에 적용하기
      Animated.parallel([
        Animated.spring(greenSquare, {
          toValue: {x: 200, y: 0},
          useNativeDriver: false,
        }),
        Animated.spring(blueSquare, {
          toValue: {x: 200, y: 400},
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  return (
    <View>
      <Button title="Ani Start" onPress={squareAnimation} />
      <Animated.View style={{opacity: redSquare}}>
        <View style={styles.redSquare}></View>
      </Animated.View>

      <Animated.View style={greenSquare.getLayout()}>
        <View style={styles.greenSquare}></View>
      </Animated.View>

      <Animated.View style={blueSquare.getLayout()}>
        <View style={styles.blueSquare}></View>
      </Animated.View>
    </View>
  );
};

export default AnimationTwo;

const styles = StyleSheet.create({
  redSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  greenSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  blueSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
