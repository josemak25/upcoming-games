import React, { useEffect, useState } from "react";
import Animated, { Easing } from "react-native-reanimated";

import { PaginationContainer } from "./styles";
import { colors } from "../../constants";

let activePosition = 1;
let lastIndex = false;

export default function Pagination({ paginate, screenshots }) {
  useEffect(() => {
    switch (true) {
      case paginate === 0:
        activePosition = 0;
        startAnimation(activePosition);
        break;
      case paginate === 1:
        activePosition = 1;
        startAnimation(activePosition);
        break;
      case paginate === screenshots.length - 1:
        activePosition = 2;
        lastIndex = true;
        startAnimation(activePosition);
        break;
      case lastIndex:
        activePosition = 1;
        startAnimation(activePosition);
        lastIndex = false;
        break;
      default:
        activePosition;
    }
  }, [paginate]);

  const [animation] = useState({
    translateX: new Animated.Value(0),
    opacity: new Animated.Value(0),
    dotPositions: {}
  });

  const startAnimation = activePosition => {
    Animated.timing(animation.opacity, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(animation.translateX, {
        toValue: animation.dotPositions[activePosition],
        duration: 300,
        easing: Easing.back(),
        useNativeDriver: true
      }).start(() => {
        Animated.timing(animation.opacity, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true
        }).start();
      });
    });
  };

  const animationStyles = {
    width: 13,
    height: 13,
    position: "absolute",
    top: 2.3,
    left: -3,
    zIndex: 1,
    backgroundColor: colors.ICON_SHADOW_COLOR,
    borderRadius: 13 / 2,
    transform: [{ translateX: animation.translateX }]
  };

  return (
    <PaginationContainer>
      <Animated.View style={animationStyles} />
      {[...new Array(3)].map((_, index) => (
        <Animated.View
          key={index}
          style={{
            width: 8,
            height: 8,
            borderRadius: 8 / 2,
            backgroundColor: colors.BACKGROUND_LIGHT_COLOR,
            position: "relative",
            opacity: animation.opacity
          }}
          onLayout={e => {
            const { x: position } = e.nativeEvent.layout;
            animation.dotPositions[index] = position;
          }}
        />
      ))}
    </PaginationContainer>
  );
}
