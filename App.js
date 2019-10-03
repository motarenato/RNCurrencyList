import React, {Fragment, useState} from 'react'
import styled from 'styled-components/native'

import ListItem from './src/components/ListItem'

import {data} from './src/mocks/data'

import {
  Animated,
  Dimensions,
  Easing,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native'
const {height} = Dimensions.get('window')

const AbsoluteListView = styled.View`
  position: absolute;
  top: -10px;
  left: -10px;
  height: ${height};
  width: 100%;
`
const BaseView = styled.View`
  height: ${height};
  position: relative;
  width: 100%;
`

const keyExtractor = item => item.id.toString()
const App = () => {
  const [isModalVisible, changeIsModalVisible] = useState(false)

  const openModal = () => changeIsModalVisible(true)
  const closeModal = () => changeIsModalVisible(false)

  console.log(data)
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BaseView>
          <AbsoluteListView>
            <FlatList
              data={data}
              keyExtractor={keyExtractor}
              renderItem={item => <ListItem {...item} />}
            />
          </AbsoluteListView>
        </BaseView>
      </SafeAreaView>
    </Fragment>
  )
}

export default App
