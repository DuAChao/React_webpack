'use strict';
import React from 'react';
import './index.scss';
import { Button } from 'antd';

class cbk extends React.Component {

    constructor() {
        super();
    }
    componentWillMount() {}
    
    //表格数据
    render() {
        
        return (
            <div className="index_right_cont_container">
                <div className="container_out ToolContainer">
                    {/*工具栏*/}
                    <div className="toolbar">
                        <div className="toolbar-md-1">
                            <Button type="primary">生成抄表卡</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary">读取抄表</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary">保存抄表数据</Button>
                        </div>
                    </div>
                    {/*内容*/}
                    <div className='MainToolCbk'>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>数据条数：<span>0</span>条</h3>
                                <div className='cont'>
                                    <div className='tableTitle'>
                                        <div className='tableTitle-col-1'>表号</div>
                                        <div className='tableTitle-col-1'>累计用水量</div>
                                        <div className='tableTitle-col-1'>当前剩余金额</div>
                                        <div className='tableTitle-col-1'>水表状态</div>
                                        <div className='tableTitle-col-1'>数据状态</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default cbk;
