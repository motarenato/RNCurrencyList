import React from 'react'
import {Dimensions} from 'react-native'
import {LineChart} from 'react-native-chart-kit'

const CurrencyChangeChart = ({data}) => {
  const {percent_change_7d, percent_change_24h, percent_change_1h, price} = data
  const price7days = price + (percent_change_7d * price) / 100
  const price24h = price + (percent_change_24h * price) / 100
  const price1h = price + (percent_change_1h * price) / 100
  const chartData = {
    labels: ['7 Dias', '24H', '1H', 'Atual'],
    datasets: [
      {
        data: [price7days, price24h, price1h, price],
        color: (opacity = 1) => `rgba(100, 181, 245, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  }

  const chartConfig = {
    backgroundColor: '#f5f5f5',
    backgroundGradientFrom: '#f5f5f5',
    backgroundGradientTo: '#f5f5f5',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(112,112,112, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }
  return (
    <LineChart
      data={chartData}
      width={Dimensions.get('window').width}
      height={220}
      chartConfig={chartConfig}
      style={{
        marginLeft: 10,
        borderRadius: 16
      }}
    />
  )
}

export default CurrencyChangeChart
