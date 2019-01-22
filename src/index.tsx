import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Top from './pages/Top'

render(
  <Provider store={store}>
    <Top />
  </Provider>,
  document.getElementById('root')
)