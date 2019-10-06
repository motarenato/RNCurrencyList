import React, {Fragment, useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {Dimensions, SafeAreaView, StatusBar} from 'react-native'

import {fetchCryptocurrencyList} from './src/api'
import CurrencyList from './src/containers/CurrencyList/CurrencyList'

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

const App = () => {
  const [isModalVisible, changeIsModalVisible] = useState(false)

  const openModal = () => changeIsModalVisible(true)
  const closeModal = () => changeIsModalVisible(false)

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BaseView>
          <AbsoluteListView>
            <CurrencyList />
          </AbsoluteListView>
        </BaseView>
      </SafeAreaView>
    </Fragment>
  )
}

export default App
