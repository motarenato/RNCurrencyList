import React, {useEffect, useState} from 'react'
import {FlatList} from 'react-native'
import styled from 'styled-components/native'
import {useDispatch, useSelector} from 'react-redux'

import CurrencyChangeChart from '../../components/CurrencyChangeChart'
import ListItem from '../../components/ListItem'
import OverlayModal from '../../components/OverlayModal'
import {actions} from './constants'

const StyledCurrencyList = styled.View``

const CurrencyList = () => {
  const [isModalVisible, changeIsModalVisible] = useState(false)
  const [chartData, changeCharData] = useState(null)

  const keyExtractor = item => item.id.toString()

  const cryptoList = useSelector(state => state.listState.cryptoList)
  const dispatch = useDispatch()

  const openModal = data => {
    changeCharData(data)
    changeIsModalVisible(true)
  }
  const closeModal = () => {
    changeCharData(null)
    changeIsModalVisible(false)
  }

  useEffect(() => {
    dispatch({type: actions.REQUEST_GET_CURRENCY_LIST})
  }, [])

  return (
    <StyledCurrencyList>
      <FlatList
        data={cryptoList}
        keyExtractor={keyExtractor}
        renderItem={data => <ListItem {...data.item} openModal={openModal} />}
      />
      <OverlayModal
        title="Detalhes"
        visible={isModalVisible}
        onClose={() => closeModal()}>
        {chartData && <CurrencyChangeChart data={chartData} />}
      </OverlayModal>
    </StyledCurrencyList>
  )
}

export default CurrencyList
