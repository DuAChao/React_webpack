/**
 * Created by Administrator on 2017-04-13.
 */

import React from 'react';
// import './index.scss';
import { Table } from 'antd';

class table extends React.Component {

    constructor() {
        super();
    }
    

    render() {
        const columns = [
        {
            title: '序号',
            dataIndex: 'No',
            width: 50,
            fixed: 'left',
        },{
            title: '姓名',
            dataIndex: 'name',
            width: 100,
            fixed: 'left',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '客户户号',
            dataIndex: 'UserNo',
            width: 100,
            fixed: 'left',
        },{
            title: '电话',
            dataIndex: 'phone',
            width: 100,
        }, {
            title: '用户类型',
            dataIndex: 'type',
            width: 80,
        }, {
            title: '地址',
            dataIndex: 'address',
        }
        ];
        const data = [{
            key: '1',
            No:'1',
            name: 'John Brown',
            UserNo: '01010015',
            phone:'18000000000',
            type:'居民',
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            No:'2',
            name: 'Jim Green',
            UserNo: '01010016',
            phone:'18000000000',
            type:'居民',
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            No:'3',
            name: 'Joe Black',
            UserNo: '01010014',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '4',
            No:'4',
            name: 'Disabled User1',
            UserNo: '01010012',
            phone:'18000000000',
            type:'商铺',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '5',
            No:'5',
            name: 'Disabled User2',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '6',
            No:'6',
            name: 'Disabled User3',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '7',
            No:'7',
            name: 'Disabled User4',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '8',
            No:'8',
            name: 'Disabled User5',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '9',
            No:'9',
            name: 'Disabled User6',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '10',
            No:'10',
            name: 'Disabled User',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '11',
            No:'11',
            name: 'Disabled User',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '12',
            No:'12',
            name: 'Disabled User',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '13',
            No:'13',
            name: 'Disabled User',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '14',
            No:'14',
            name: 'Disabled User',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '15',
            No:'1',
            name: 'Disabled User',
            UserNo: '01010012',
            phone:'18000000000',
            type:'居民',
            address: 'Sidney No. 1 Lake Park',
        }
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
        let winWidth,
            pageSize;
        //获取窗口宽度
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;

        if(winWidth < 1441){
            pageSize = 8;
        }else if(winWidth > 1439 && winWidth < 1601){
            pageSize = 10;
        }else {
            pageSize = 13;
        }
        return (
            <Table rowSelection={rowSelection} columns={columns} pagination={{ pageSize: pageSize }} dataSource={data} size="default" scroll={{ x: '130%' }}/>
        )
    }
}

export default table;