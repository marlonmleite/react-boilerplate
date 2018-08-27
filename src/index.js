import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from 'core/constants/theme'
import Main from 'containers/Main'
import store from './store'

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
)

render(
  <App />,
  document.getElementById('root'),
)
