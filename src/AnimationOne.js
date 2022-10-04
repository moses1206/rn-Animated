import {StyleSheet, Text, View, Animated, Easing, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const AnimationOne = () => {
  const [startPoint, setStartPoint] = useState(new Animated.ValueXY(0, 0));
  const [fadeValue, setFadeValue] = useState(new Animated.Value(1));

  // useEffect(() => {
  //   Animated.timing(startPoint, {
  //     useNativeDriver: false,
  //     toValue: {x: 50, y: 300},
  //     duration: 2000,
  //     delay: 1500,
  //     // 통통 튀는 효과
  //     // easing: Easing.bounce
  //     // 확 내려 갔다가 올라오는 효과
  //     easing: Easing.elastic(3),
  //   }).start();
  // });

  const moveAnimation = () => {
    Animated.fade(fadeValue, {
      useNativeDriver: false,
      toValue: 0,
      duration: 2000,
      delay: 500,
      // 통통 튀는 효과
      // easing: Easing.bounce
      // 확 내려 갔다가 올라오는 효과
      easing: Easing.elastic(3),
    }).start();
  };

  const fadeAnimation = () => {
    Animated.timing(fadeValue, {
      useNativeDriver: false,
      toValue: 0,
      duration: 2000,
      delay: 500,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          opacity: fadeValue,
          transform: [
            {
              translateY: fadeValue.interpolate({
                // 첫번째 fade 효과 .. 순서는 무조건 작은거 부터 큰것으로 입력
                inputRange: [0, 0.5, 1],
                // fade와 함께 적용할 효과 fade가 0(없어짐)일 때 700이 대응하고
                // fade가 1일때 0(제자리)이 대응함.
                outputRange: [700, 350, 0],
              }),
              rotateX: fadeValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '180deg', '360deg'],
              }),
            },
          ],
        }}>
        <View style={styles.square}></View>
      </Animated.View>
      <Button title="Ani Start" onPress={fadeAnimation} />
    </View>
  );
};

export default AnimationOne;

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  opacity: {},
});
