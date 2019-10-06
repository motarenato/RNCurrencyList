import React from 'react'
import {FlatList} from 'react-native'
import styled from 'styled-components/native'
import {connect} from 'react-redux'

import ListItem from '../../components/ListItem'
import {requestGetCurrencyList} from './actions'

const StyledCurrencyList = styled.View``

class CurrencyList extends React.Component {
  componentDidMount() {
    this.props.requestGetCurrencyList()
  }

  render() {
    const keyExtractor = item => item.id.toString()
    return (
      <StyledCurrencyList>
        {console.log(this.props)}
        <FlatList
          data={this.props.cryptoList}
          keyExtractor={keyExtractor}
          renderItem={data => <ListItem {...data.item} />}
        />
      </StyledCurrencyList>
    )
  }
}

const mapStateToProps = store => ({
  cryptoList: store.listState.cryptoList,
})

const mapDispatchToProps = {requestGetCurrencyList}

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyList)
