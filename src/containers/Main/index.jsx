import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import routes from '../../routes'

const Main = () => (
  <Fragment>
    <Menu />
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </Switch>
  </Fragment>
)

export default Main


