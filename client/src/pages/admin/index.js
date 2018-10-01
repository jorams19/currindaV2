import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import menu from './menu';
import adminRoutes from '../../routes/admin';

class Admin extends Component {
  render() {
    return (
      <DashboardLayout
        menu={menu}
        routes={adminRoutes}
      />
    );
  }
}

export default Admin;