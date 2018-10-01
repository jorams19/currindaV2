import React, { Component, Fragment } from 'react';
import { Card, Table, Button } from 'antd';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import tableColumns from './tableColumns';
import sampleDataSource from './sampleDataSource';

class Events extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <Table
            columns={tableColumns}
            dataSource={sampleDataSource}
            scroll={{ x: 1550 }}
            pagination={{ pageSize: 5 }}
            rowSelection={{
              onChange: () => { },
            }}
          />
        </Card>
      </Fragment>
    );
  }
}

export default Events;