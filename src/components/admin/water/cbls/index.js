'use strict';
import React from 'react';
import './index.scss';
import {Button , Input , DatePicker , Icon , Tooltip} from 'antd';

/**表格*/
import TABLE from '../../../../common/components/table';
class cbls extends React.Component {
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
    componentDidMount() {

    }
    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div className="index_right_cont_container">
                <div className="container_out">
                    <div className='RightContainer' style={{width:'100%'}}>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
                                <Tooltip placement="top" title={'列表设置'}>
                                    <div className='tabLine-col'>
                                        <Icon type="setting" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title={'导出'}>
                                    <div className='tabLine-col'>
                                        <Icon type="cloud-download-o" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title={'打印清单'}>
                                    <div className='tabLine-col'>
                                        <Icon type="printer" />
                                    </div>
                                </Tooltip>
                            </div>
                            <div className='commonInfo'>
                                <div className='UserHandle'>
                                    <div className='comIn iptList'>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>开始月份：</h3>
                                                <div className="ipt">
                                                    <DatePicker
                                                        disabledDate={this.disabledStartDate.bind(this)}
                                                        format="YYYY-MM-DD"
                                                        value={startValue}
                                                        placeholder="开始月份"
                                                        onChange={this.onStartChange.bind(this)}
                                                        onOpenChange={this.handleStartOpenChange.bind(this)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>截止月份：</h3>
                                                <div className="ipt">
                                                    <DatePicker
                                                        disabledDate={this.disabledEndDate.bind(this)}
                                                        format="YYYY-MM-DD"
                                                        value={endValue}
                                                        placeholder="截止月份"
                                                        onChange={this.onEndChange.bind(this)}
                                                        open={endOpen}
                                                        onOpenChange={this.handleEndOpenChange.bind(this)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>基本信息：</h3>
                                                <div className="ipt">
                                                    <Input placeholder="户号/姓名/电话/身份证" size="default"/>
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
        );
    }
}
export default cbls;


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
                            <Button type="primary" icon="printer">打印清单</Button>
                        </div>
                    </div>
                    
                    <div className="UserWaterCblsOut">
                        <div className="UserRecorin UserRecorTable">
                            <div className="bd">
                                <div className="toolbtn"></div>
                                <div className="cont">
                                    <div className="userhandle">
                                        <div className="userhandle-md handleArea">
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>开始月份：</span>
                                                        <DatePicker
                                                            disabledDate={this.disabledStartDate.bind(this)}
                                                            format="YYYY-MM-DD"
                                                            value={startValue}
                                                            placeholder="开始月份"
                                                            onChange={this.onStartChange.bind(this)}
                                                            onOpenChange={this.handleStartOpenChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>截止月份：</span>
                                                        <DatePicker
                                                            disabledDate={this.disabledEndDate.bind(this)}
                                                            format="YYYY-MM-DD"
                                                            value={endValue}
                                                            placeholder="截止月份"
                                                            onChange={this.onEndChange.bind(this)}
                                                            open={endOpen}
                                                            onOpenChange={this.handleEndOpenChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>基本信息：</span>
                                                        <div className="ipt">
                                                            <Input placeholder="户号/姓名/电话/身份证" size="default"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-right btn">
                                                    <div className='userhandle-col-1'>
                                                        <Button type="primary">搜索</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="userhandle-md pie" ref="pieReact">

                                        </div>
                                    </div>
                                    <TABLE />
                                </div>
                            </div>
                        </div>
                    </div>*/}