import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import { Layout, Menu, Dropdown } from 'antd';
import DashboardMenu from '../DashboardMenu';
import DashboardHeaderRight from '../DashboardHeaderRight';
import Routes from '../Routes';

const { Header, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

class Dashboardlayout extends Component {
  render() {
    const { menu, routes } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          width={200}
          style={{
            overflow: 'auto',
            height: '100%',
          }}
        >
          <DashboardMenu menu={menu} />
        </Sider>
        <Layout
          style={{
            height: '100vh',
            overflow: 'hidden',
            flexDirection: 'column'
          }}
        >
          <Header
            style={{
              background: '#FFF',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div />
            <DashboardHeaderRight />
          </Header>
          <Content
            style={{
              height: '100%',
              padding: '18px',
              overflow: 'auto',
            }}
          >
            <Switch>
              <Routes routes={routes} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboardlayout;