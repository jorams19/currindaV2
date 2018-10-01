import React, { PureComponent, Fragment } from 'react';
import { Route } from 'react-router-dom';
import AuthorizeRoute from '../../helpers/AuthorizeRoute';
// import routes from './routes';

class Routes extends PureComponent {
  constructor(props) {
    super(props);
    const { routes } = props;
    this.routes = routes.map(
      (routeItem) => {
        const { roles, path, component } = routeItem;
        return (
          <Route
            key={path}
            path={path}
            component={AuthorizeRoute(roles)(component)}
          />
        );
      });
  }
  render() {
    return (
      <Fragment>
        {this.routes}
      </Fragment>
    );
  }
}

export default Routes;