'use strict';
import React from 'react';
import './index.scss';
import { Button , Input , Select  , DatePicker , Icon , Tooltip} from 'antd';

const { MonthPicker } = DatePicker;

/**表格*/
import TABLE from '../../../../common/components/table';
import TREE from '../../../../common/components/tree';

class zblr extends React.Component {

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
                                    <Tooltip placement="top" title={'新增总表'}>
                                        <div className='tabLine-col'>
                                            <Icon type="plus-circle-o" />
                                        </div>
                                    </Tooltip>
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

                                </div>
                                <div className='commonInfo'>
                                    <div className='UserHandle'>
                                        <div className='comIn iptList'>
                                            <div className='iptList-col'>
                                                <div className='iptList-col-1'>
                                                    <h3>抄表月份：</h3>
                                                    <div className='ipt'>
                                                        <MonthPicker
                                                            disabledDate={this.disabledStartDate.bind(this)}
                                                            format="YYYY-MM"
                                                            value={startValue}
                                                            placeholder="抄表月份"
                                                            onChange={this.onStartChange.bind(this)}
                                                            onOpenChange={this.handleStartOpenChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='iptList-col'>
                                                <div className='iptList-col-1'>
                                                    <h3>抄表状态：</h3>
                                                    <div className="ipt">
                                                        <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                            <Option value="all">全部</Option>
                                                            <Option value="pb">已抄</Option>
                                                            <Option value="yc">未抄</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='iptList-col'>
                                                <div className='iptList-col-1'>
                                                    <h3>基本信息：</h3>
                                                    <div className="ipt">
                                                        <Input placeholder="表号/名称/地址" size="default"/>
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

export default zblr;

/*
<div className="toolbar">
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="plus-circle">
                                新增总表
                            </Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="search">搜索</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="cloud-download">导出</Button>
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
                                                        <span>抄表月份：</span>
                                                        <MonthPicker
                                                            disabledDate={this.disabledStartDate.bind(this)}
                                                            format="YYYY-MM"
                                                            value={startValue}
                                                            placeholder="抄表月份"
                                                            onChange={this.onStartChange.bind(this)}
                                                            onOpenChange={this.handleStartOpenChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>抄表状态：</span>
                                                        <div className="ipt">
                                                            <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                                <Option value="all">全部</Option>
                                                                <Option value="pb">已抄</Option>
                                                                <Option value="yc">未抄</Option>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>基本信息：</span>
                                                        <div className="ipt">
                                                            <Input placeholder="表号/名称/地址" size="default"/>
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
                    </div>*/
