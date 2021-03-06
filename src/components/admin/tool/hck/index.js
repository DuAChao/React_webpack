'use strict';
import React from 'react';
import './index.scss';
import {message , Checkbox , Radio , Menu , Dropdown , Button , Icon , Input , Select   } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker } = DatePicker;

const SubMenu = Menu.SubMenu;
const CheckboxGroup = Checkbox.Group;

class hck extends React.Component {

    constructor() {
        super();
    }
    componentWillMount() {}
    
    componentDidMount() {}

    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }


    //表格数据
    render() {
        
        const plainOptions = ['私有秘钥'];
        return (
            <div className="index_right_cont_container">
                <div className="container_out ToolContainer">
                    {/*工具栏*/}
                    <div className="toolbar">
                        <div className="toolbar-md-1">
                             <CheckboxGroup options={plainOptions} defaultValue={['']} onChange={this.onChange} />
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary">生成数据回抄卡</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary">读取数据回抄卡</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary">生成导入卡</Button>
                        </div>
                    </div>
                    {/*内容*/}
                    <div className='MainToolHck'>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>参数信息</h3>
                                <div className='cont'>
                                    <div className='tableTitle'>参数项目</div>
                                    <div className='tableTitle'>数据</div>
                                    <div className='tableTitle'>参数项目</div>
                                    <div className='tableTitle'>数据</div>
                                </div>
                            </div>
                        </div>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>水价信息</h3>
                                 <div className='cont'>
                                    <div className='tableTitle'>水量A</div>
                                    <div className='tableTitle'>数据</div>
                                    <div className='tableTitle'>水价A</div>
                                    <div className='tableTitle'>数据</div>
                                    <div className='tableTitle'>水量B</div>
                                    <div className='tableTitle'>数据</div>
                                    <div className='tableTitle'>水价B</div>
                                    <div className='tableTitle'>数据</div>
                                </div>
                            </div>
                        </div>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>刷新数据</h3>
                                 <div className='cont'>
                                    <div className='tableTitle'>项目</div>
                                    <div className='tableTitle'>数据</div>
                                    <div className='tableTitle'>项目</div>
                                    <div className='tableTitle'>数据</div>
                                </div>
                            </div>
                        </div>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>冻结数据</h3>
                                 <div className='cont'>
                                    <div className='tableTitle'>冻结月份</div>
                                    <div className='tableTitle'>累计用水量</div>
                                    <div className='tableTitle'>剩余金额</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hck;
