import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Logo from '../Logo';

const { SubMenu, Item } = Menu;

class DashboardMenu extends Component {
  render() {
    const { menu } = this.props;
    return (
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['events']}
        style={{ height: '100%' }}
      >
        <Item style={{
          height: '52px',
          padding: '18px 20px'
        }}>
          <Link to="/">
            <Logo
              style={{
                width: '80%',
                height: 'auto',
              }}
            />
          </Link>
        </Item>
        {menu.map((item) => {
          return (item.isSubmenu) ? (
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} theme="outlined" />
                  {item.title}
                </span>}
            >
              {item.subItems.map((subItem) => (
                <Item
                  key={subItem.key}
                >
                  <Link to={subItem.link}>
                    <Icon type={subItem.icon} theme="outlined" />
                    {subItem.title}
                  </Link>
                </Item>
              ))}
            </SubMenu>) : (
              <Item key={item.key}>
                <Link to={item.link}>
                  <Icon type={item.icon} theme="outlined" />
                  {item.title}
                </Link>
              </Item>
            );
        })}
      </Menu>
    );
  }
}

export default DashboardMenu;