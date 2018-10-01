import React from 'react';
import { Avatar, Dropdown } from 'antd';
import styled from 'styled-components';

export const StyledDropdown = styled(Dropdown) `
  cursor: pointer;
  padding: 0 12px;
  display: inline-block;
  transition: all 0.3s;
  height: 100%;
`;

export const StyledAvatar = styled(Avatar) `
  margin-right: 4px !important;
  > i {
    vertical-align: middle;
  }
`;