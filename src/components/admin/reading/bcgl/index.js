'use strict';
import React from 'react';
import './index.scss';
import { Menu , Dropdown , Button , Tooltip , Icon , Input , Select } from 'antd';
/**表格*/
import TABLE from '../../../../common/components/table';
import TREE from '../../../../common/components/tree';
class bcgl extends React.Component {

    constructor() {
        super();
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false
        };
    }
    disabledStartDate (startValue) {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();

    };

    disabledEndDate(endValue) {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };
    onChange(field, value) {
        this.setState({
            [field]: value,
        });
    };
    
    onStartChange (value) {
        this.onChange('startValue', value);

    }
    

    onEndChange(value) {
        this.onChange('endValue', value);
    }
    handleStartOpenChange(open) {
        if (!open) {
            this.setState({ endOpen: true });
        }
    }
    handleEndOpenChange (open) {
        this.setState({ endOpen: open });
    }

    componentWillMount() {

    }
    
    componentDidMount() {
     
    }



    //表格数据
    render() {
        // 下拉菜单

        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick} style={{ width: 100 }}>
                <Menu.Item key="1">新增区域</Menu.Item>
                <Menu.Item key="2">线路调整</Menu.Item>
                <Menu.Item key="3">管理调整</Menu.Item>
            </Menu>
        );

        const { startValue, endValue, endOpen } = this.state;
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
                        <div className='commonInner'>
                            <div className='commonInner RightInfo'>
                                <div className="tabLine">
                                    <Tooltip placement="top" title={'列表设置'}>
                                        <div className='tabLine-col'>
                                            <Icon type="setting" />
                                        </div>
                                    </Tooltip>
                                    <Tooltip placement="top" title={'搜索'}>
                                        <div className='tabLine-col'>
                                            <Icon type="search" />
                                        </div>
                                    </Tooltip>
                                    <Tooltip placement="top" title={'导出'}>
                                        <div className='tabLine-col'>
                                            <Icon type="cloud-download-o" />
                                        </div>
                                    </Tooltip>
                                    <div className='tabLine-col'>
                                        <Dropdown overlay={menu} placement="bottomCenter">
                                            <a className="ant-dropdown-link" href="JavaScript:;">
                                                功能菜单 <Icon type="down" />
                                            </a>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className='commonInfo'>
                                    <div className='UserHandle'>
                                        <div className='comIn iptList'>
                                            <div className='iptList-col'>
                                                <div className='iptList-col-1'>
                                                    <h3>管理人员：</h3>
                                                    <div className="ipt">
                                                        <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                            <Option value="all">全部</Option>
                                                            <Option value="pb">普表</Option>
                                                            <Option value="yc">远传</Option>
                                                            <Option value="kb">卡表</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='iptList-col'>
                                                <div className='iptList-col-1'>
                                                    <h3>抄表人员：</h3>
                                                    <div className="ipt">
                                                        <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                            <Option value="all">全部</Option>
                                                            <Option value="pb">普表</Option>
                                                            <Option value="yc">远传</Option>
                                                            <Option value="kb">卡表</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='iptList-col'>
                                                <div className='iptList-col-1'>
                                                    <h3>本子名称：</h3>
                                                    <div className="ipt">
                                                        <Input placeholder="本子名称" size="default"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='iptList-col'>
                                                <div className='iptList-col-1'>
                                                    <Button type="primary">搜索</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
            </div>
        );
    }
}

export default bcgl;


{/*<div className="toolbar">
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="bars">
                                列设置
                            </Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="search">搜索</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="cloud-download">导出</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Dropdown overlay={menu}>
                                <Button>
                                    功能菜单 <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    
                    <div className="UserReadingBcglOut">
                        <div className="UserRecorin UserRecorTree">
                            <div className="bd">
                                <div className="title">
                                    西充鸿源水务
                                </div>
                                <div className="cont">
                                    <TREE />
                                </div>
                            </div>
                        </div>
                        <div className="UserRecorin UserRecorTable">
                            <div className="bd">
                                <div className="toolbtn"></div>
                                <div className="cont">
                                    <div className="userhandle">
                                        <div className="userhandle-md handleArea">
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>管理人员：</span>
                                                        <div className="ipt">
                                                            <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                                <Option value="all">全部</Option>
                                                                <Option value="pb">普表</Option>
                                                                <Option value="yc">远传</Option>
                                                                <Option value="kb">卡表</Option>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>抄表人员：</span>
                                                        <div className="ipt">
                                                            <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                                <Option value="all">全部</Option>
                                                                <Option value="pb">普表</Option>
                                                                <Option value="yc">远传</Option>
                                                                <Option value="kb">卡表</Option>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>本子名称：</span>
                                                        <div className="ipt">
                                                            <Input placeholder="本子名称" size="default"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-right btn">
                                                    <div className='userhandle-col-1'>
                                                        <Button type="primary">搜索</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <TABLE />
                                </div>
                            </div>
                        </div>
                    </div>*/}
