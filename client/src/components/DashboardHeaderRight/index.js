import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Avatar, Icon, Menu } from 'antd';
import { StyledDropdown, StyledAvatar } from './styled';

const { Item, Divider } = Menu;

class DashboardHeaderRight extends Component {
  render() {
    const menu = (
      <Menu>
        <Item>
          <Link to="/admin/account-settings">
            Account settings
          </Link>
        </Item>
        <Divider />
        <Item>
          <Link to="/logout">Logout</Link>
        </Item>
      </Menu>
    );

    return (
      <div>
        <StyledDropdown
          trigger={["click"]}
          overlay={menu}
        >
          <span style={{ display: 'inline-block' }}>
            <StyledAvatar
              size="small"
              icon="user"
            />
            <span>John Doe</span>
          </span>
        </StyledDropdown>
      </div>
    );
  }
}

export default DashboardHeaderRight;