import React from 'react'
import {Animated, Easing, Text, TouchableWithoutFeedback, View} from 'react-native'

import styled from 'styled-components/native'

const priceCurrency = 'USD'

const StyledListItem = styled.View`
  border-radius: 10px;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  background-color: #e5e5e5;
`
const Symbol = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  margin-right: 10px;
`
const SymbolImage = styled.Image`
  height: 20px;
  width: 20px;
`
const CoinDetails = styled.View`
  align-items: center;
  flex: 3;
  justify-content: space-between;
  flex-direction: row;
`
const DetailColumn = styled.View`
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
`

const DetailLabel = styled.Text`
  font-size: 12;
  font-weight: 900;
`

const AnimatedListItem = Animated.createAnimatedComponent(StyledListItem)
class ListItem extends React.PureComponent {
  render() {
    let scaleValue = new Animated.Value(0)
    const cardScale = scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1.2],
    })
    const {name, id, quote, openModal} = this.props
    const percentChange = quote[priceCurrency].percent_change_24h.toFixed(3)
    const price = quote[priceCurrency].price.toFixed(3)
    return (
      <TouchableWithoutFeedback
        onPress={() => openModal(quote[priceCurrency])}
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
          <Symbol>
            <SymbolImage
              source={{
                uri: `https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`,
              }}
            />
            <Text>{name}</Text>
          </Symbol>
          <CoinDetails>
            <DetailColumn>
              <DetailLabel>Preço:</DetailLabel>
              <Text>{`${price} ${priceCurrency}`}</Text>
            </DetailColumn>
            <DetailColumn>
              <DetailLabel>Variação (24h):</DetailLabel>
              <Text>{percentChange}%</Text>
            </DetailColumn>
          </CoinDetails>
        </AnimatedListItem>
      </TouchableWithoutFeedback>
    )
  }
}
export default ListItem
