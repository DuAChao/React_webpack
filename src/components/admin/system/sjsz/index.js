/**
 * Created by Administrator on 2017-04-01.
 */
'use strict';
import React from 'react';
import { Button, Icon , Tooltip , Dropdown  } from 'antd';

/**表格*/
import TABLE from './table'

class sjsz extends React.Component {

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
                <div className="container_out SystemSjsz">
                    <div className='RightContainer' style={{width: '100%'}}>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
                                <Tooltip placement="top" title='新增用水类型'>
                                    <div className='tabLine-col'>
                                        <Icon type="plus-circle-o" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title='搜索'>
                                    <div className='tabLine-col'>
                                        <Icon type="search" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title='导出'>
                                    <div className='tabLine-col'>
                                        <Icon type="cloud-download-o" />
                                    </div>
                                </Tooltip>
                            </div>
                            <div className='commonInfo'>
                                <div className='TableContainer'>
                                    <div className='comIn'>
                                        <TABLE />
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


export default sjsz;