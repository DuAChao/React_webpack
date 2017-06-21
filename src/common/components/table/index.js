/**
 * Created by Administrator on 2017-04-13.
 */

import React from 'react';
// import './index.scss';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';

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
        
        const UserInfoData = [
            {key: '1', name: '张三', UserNo: '01010015', phone:'18000000000', type:'居民', address: 'New York No. 1 Lake Park',},
            {key: '2', name: '李四', UserNo: '01010016', phone:'18000000000', type:'居民', address: 'London No. 1 Lake Park',},
            {key: '3', name: '小红', UserNo: '01010014', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '4', name: '小明', UserNo: '01010012', phone:'18000000000', type:'商铺', address: 'Sidney No. 1 Lake Park',},
            {key: '5', name: '李大钊', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '6', name: '李大炮', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '7', name: '李小鹏', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '8', name: '吴江市', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '9', name: '李达康', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '10', name: '李西西', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',}
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
        

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={UserInfoData} size="default" scroll={{ x: '130%' }} />
        )
    }
}

export default table;