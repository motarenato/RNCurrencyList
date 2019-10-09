import axios from 'axios'
import {API_KEY} from 'react-native-dotenv'

const BASE_URL = 'https://pro-api.coinmarketcap.com/v1'

const HEADERS = {
  'X-CMC_PRO_API_KEY': API_KEY,
}
const URL = `${BASE_URL}/cryptocurrency/listings/latest`

const fetchCryptocurrencyList = () =>
  axios
    .get(URL, {
      headers: HEADERS,
      params: {
        start: '1',
        limit: '50',
        convert: 'USD',
      },
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error.response || error
    })

export {fetchCryptocurrencyList}
