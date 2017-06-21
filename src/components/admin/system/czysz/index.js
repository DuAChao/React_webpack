/**
 * Created by Administrator on 2017-04-01.
 */
'use strict';
import React from 'react';
import './index.scss';
import { Icon , Tooltip} from 'antd';

/**表格*/
import TABLE from '../../../../common/components/table'
import TREE from '../../../../common/components/tree';
import Xzyyt from './xzyyt';
import Xzczy from './xzczy';

class czysz extends React.Component {

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
                <div className="container_out">

                    <div className='LeftContainer'>
                        <div className='commonInner'>
                            <div className='companyTree'>
                                <div className='comIn'>
                                    <h2 className="companyName"><Icon type="home" />西充鸿源水务</h2>
                                    <div className='TreeCont'>
                                        <TREE />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='RightContainer'>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
                                <Xzyyt />
                                <Xzczy />
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
 
export default czysz;

/*
        <div className="toolbar">
                        <Xzyyt />
                        <Xzczy />
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="search">搜索</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="cloud-download">导出</Button>
                        </div>
                    </div>
       
                    <div className="SystemCzyszOut">
                        <div className="bumenin bumenTree">
                            <div className="bd">
                                <div className="title">
                                    西充鸿源水务
                                </div>
                                <div className="cont">
                                    <TREE />
                                </div>
                            </div>
                        </div>
                        <div className="bumenin bumenTable">
                            <div className="bd">
                                <div className="toolbtn"></div>
                                <div className="cont">
                                    <TABLE />
                                </div>
                            </div>
                        </div>
                    </div>
*/