/**
 * Created by Administrator on 2017-04-01.
 */
'use strict';
import React from 'react';
import './index.scss';
import { Button, Icon , Tree ,Tooltip , Menu , Dropdown  } from 'antd';
const TreeNode = Tree.TreeNode;
/**表格*/
import TABLE from '../../../../common/components/table'
import TREE from '../../../../common/components/tree';
import Xzjzq from './xzjzq';

class ycsz extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            visible: false,
        }
    }

    componentWillMount() {

    }
    componentDidMount() {

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
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
                                <Xzjzq />
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
                    {/*工具栏*/}
                    <div className="toolbar">

                        <Xzjzq />
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="search">搜索</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="cloud-download">导出</Button>
                        </div>
                    </div>
                    {/*内容*/}
                    <div className="SystemYcszOut">
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
                </div>
            </div>
        );
    }
}


export default ycsz;