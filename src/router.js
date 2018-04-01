import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux


function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      models: () => [],
      component: () => import('./routes/IndexPage'),
    }, {
      path: '/demo',
      models: () => [import('./models/demo')],
      component: () => import('./routes/demo/'),
    }
  ]

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" />
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route key={key}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
      </Switch>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default RouterConfig;
