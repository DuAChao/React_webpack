/**
 * Created by Administrator on 2017-04-13.
 */

import React from 'react';
import { Table } from 'antd';

class table extends React.Component {

    constructor() {
        super();
    }
    

    render() {
        const columns = [
            {title: '姓名', dataIndex: 'name', width: 100, fixed: 'left', render: text => <a href="#">{text}</a>,}, 
            {title: '客户户号', dataIndex: 'UserNo', width: 100, fixed: 'left',},
            {title: '电话', dataIndex: 'phone', width: 100,},
            {title: '用户类型', dataIndex: 'type', width: 80,}, 
            {title: '地址', dataIndex: 'address',}
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        };

        console.log(this.props);

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.UserInfoData} size="default" scroll={{ x: '130%' }} />
        )
    }
}

export default table;