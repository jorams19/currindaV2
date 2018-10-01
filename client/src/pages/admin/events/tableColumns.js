import React from 'react';
import { Tag } from 'antd';

export default [{
  title: 'Short Name',
  key: 'shortname',
  dataIndex: 'shortname',
  fixed: 'left',
  width: 150
}, {
  title: 'Long Name',
  key: 'longname',
  dataIndex: 'longname',
  fixed: 'left',
  width: 150
}, {
  title: 'Venue',
  key: 'venue',
  dataIndex: 'venue',
  width: 150
}, {
  title: 'Attendees',
  key: 'attendees',
  dataIndex: 'attendees',
  width: 150
}, {
  title: 'Sponsors',
  key: 'sponsors',
  dataIndex: 'sponsors',
  width: 150
}, {
  title: 'Abstracts',
  key: 'abstracts',
  dataIndex: 'abstracts',
  width: 150
}, {
  title: 'Dates',
  key: 'dates',
  dataIndex: 'dates',
  width: 150
}, {
  title: 'Active',
  key: 'active',
  dataIndex: 'active',
  fixed: 'right',
  width: 150,
  render: isActive => (
    <Tag color={isActive ? 'green' : 'red'}>
      {isActive ? 'Active' : 'Inactive'}
    </Tag>
  ),
}, {
  title: 'Unchecked',
  key: 'unchecked',
  dataIndex: 'unchecked',
  fixed: 'right',
  width: 150,
  render: unChecked => (
    <Tag color={unChecked ? 'red' : 'green'}>
      {unChecked ? 'Unchecked' : 'Checked'}
    </Tag>
  ),
}, {
  title: 'Incomplete',
  key: 'incomplete',
  dataIndex: 'incomplete',
  fixed: 'right',
  width: 150,
  render: inComplete => (
    <Tag color={inComplete ? 'red' : 'green'}>
      {inComplete ? 'Incomplete' : 'Complete'}
    </Tag>
  ),
}];