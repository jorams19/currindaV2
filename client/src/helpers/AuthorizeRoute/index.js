import React, { PureComponent, Fragment } from 'react';
import UnauthorizedPage from '../../pages/misc/UnauthorizedPage';

export default (allowedRoles) => (RouteComponent) => {
  return class AuthorizeRoute extends PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      const display = (allowedRoles.includes("admin")) ?
        (<RouteComponent {...this.props} />) : (<UnauthorizedPage />);

      return (
        <Fragment>
          {display}
        </Fragment>
      );
    }
  }
}
