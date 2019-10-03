import React from 'react'
import {Animated, Easing, TouchableWithoutFeedback} from 'react-native'

import styled from 'styled-components/native'

const StyledListItem = styled.View`
  border-radius: 10px;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  background-color: #e0e0e0;
`
const StyledImage = styled.Image`
  height: 50px;
  width: 50px;
`

const AnimatedListItem = Animated.createAnimatedComponent(StyledListItem)
class ListItem extends React.PureComponent {
  render() {
    let scaleValue = new Animated.Value(0)
    const cardScale = scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1.2],
    })

    return (
      <TouchableWithoutFeedback
        onPressIn={() => {
          scaleValue.setValue(0)
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 150,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start()
        }}
        onPressOut={() => {
          Animated.timing(scaleValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start()
        }}>
        <AnimatedListItem style={{transform: [{scale: cardScale}]}}>
          <StyledImage
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
        </AnimatedListItem>
      </TouchableWithoutFeedback>
    )
  }
}
export default ListItem
