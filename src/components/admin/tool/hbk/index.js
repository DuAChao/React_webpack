'use strict';
import React from 'react';
import './index.scss';
import {message , Checkbox , Radio , Menu , Dropdown , Button , Icon , Input , Select   } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker } = DatePicker;

const SubMenu = Menu.SubMenu;

class gnk extends React.Component {

    constructor() {
        super();
        
    }
    
    componentWillMount() {

    }
    
    componentDidMount() {
       

    }
    
    //表格数据
    render() {
        return (
            <div className="index_right_cont_container">
                <div className="container_out ToolContainer">
                    {/*工具栏*/}
                    <div className="toolbar">
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="bars">
                                列设置
                            </Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="search">搜索</Button>
                        </div>
        
                    </div>
                    {/*内容*/}
                
                </div>
            </div>
        );
    }
}

export default gnk;
