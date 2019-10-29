import React, {Fragment, useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {Dimensions, SafeAreaView, StatusBar} from 'react-native'

import OverlayModal from './src/components/OverlayModal'
import CurrencyList from './src/containers/CurrencyList/CurrencyList'

const {height} = Dimensions.get('window')

const AbsoluteListView = styled.View`
  position: absolute;
  height: ${height};
  width: 100%;
`
const BaseView = styled.View`
  height: ${height};
  position: relative;
  width: 100%;
`

const App = () => {
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
