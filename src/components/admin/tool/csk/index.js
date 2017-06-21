'use strict';
import React from 'react';
import './index.scss';
import {Checkbox , Button } from 'antd';
const CheckboxGroup = Checkbox.Group;

class csk extends React.Component {

    constructor() {
        super();
    }
  
    componentWillMount() {}
    

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
                            <Button type="primary">生成参数设置卡</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary">读取参数设置卡</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary">生成门限设置卡</Button>
                        </div>
                         <div className="toolbar-md-1">
                            <Button type="primary">读取门限设置卡</Button>
                        </div>
                    </div>
                    {/*内容*/}
                    <div className='MainToolCsk'>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>参数设置</h3>
                                <div className='cont'>
                                    <div className='tableTitle'>
                                        <div className='tableTitle-col-1'>
                                            <div className='tableIn'>

                                            </div>
                                        </div>
                                        <div className='tableTitle-col-1'>
                                            <div className='tableIn'>

                                            </div>
                                        </div>
                                        <div className='tableTitle-col-1'>

                                            
                                        </div>
                                        <div className='tableTitle-col-1'>

                                        </div>
                                    </div>
                                    <div className='tableTitle'>
                                        <div className='tableTitle-col-1'>

                                        </div>
                                        <div className='tableTitle-col-1'>

                                        </div>
                                        <div className='tableTitle-col-1'>

                                        </div>
                                        <div className='tableTitle-col-1'>

                                        </div>
                                    </div>
                                    <div className='tableTitle'>
                                        <div className='tableTitle-col-1'>
                                        </div>
                                        <div className='tableTitle-col-1'>
                                        </div>
                                        <div className='tableTitle-col-1'>
                                        </div>
                                        <div className='tableTitle-col-1'>
                                        </div>
                                    </div>
                                    <div className='tableTitle'>
                                        <div className='tableTitle-col-1'>

                                        </div>
                                        <div className='tableTitle-col-1'>

                                        </div>
                                    </div>
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
                    </div>
                </div>
            </div>
        );
    }
}
export default csk;
