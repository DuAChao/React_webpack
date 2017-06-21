'use strict';
import React from 'react';
import './index.scss';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入面饼图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import { Button , Input , Select  , Icon , Tooltip} from 'antd';
import { DatePicker } from 'antd';


/**表格*/
import TABLE from '../../../../common/components/table';
import TREE from '../../../../common/components/tree';

class yccx extends React.Component {

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
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.refs.lineReact);
        // 绘制图表
        myChart.setOption({
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '2%',
                top:'8%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['正常','作废'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'户数',
                    type:'bar',
                    barWidth: '20%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data:[1323,6]
                }
            ]
        });
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
                            <div className='chart' >
                                <div className='comIn' ref="lineReact"/>
                            </div>
                        </div>
                    </div>
                    <div className='RightContainer'>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
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
                                                <h3>开始日期：</h3>
                                                <div className="ipt">
                                                    <DatePicker
                                                        disabledDate={this.disabledStartDate.bind(this)}
                                                        format="YYYY-MM-DD"
                                                        value={startValue}
                                                        placeholder="开始日期"
                                                        onChange={this.onStartChange.bind(this)}
                                                        onOpenChange={this.handleStartOpenChange.bind(this)}
                                                    /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>截止日期：</h3>
                                                <div className="ipt">
                                                    <DatePicker
                                                        disabledDate={this.disabledEndDate.bind(this)}
                                                        format="YYYY-MM-DD"
                                                        value={endValue}
                                                        placeholder="结束日期"
                                                        onChange={this.onEndChange.bind(this)}
                                                        open={endOpen}
                                                        onOpenChange={this.handleEndOpenChange.bind(this)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>收费人员：</h3>
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
                                                <h3>数据状态：</h3>
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
                                                <h3>交易类型：</h3>
                                                <div className="ipt">
                                                    <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                        <Option value="all">全部</Option>
                                                        <Option value="pb">未抄表</Option>
                                                        <Option value="yc">已抄表</Option>
                                                        <Option value="kb">已审核</Option>
                                                    </Select>
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
                                                <Button type="primary" >搜索</Button>
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

export default yccx;

/*
 <div className="toolbar">
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="search">高级查询</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="cloud-download">导出</Button>
                        </div>
                    </div>
          
                    <div className="UserSearchYccxOut">
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
                                                        <span>开始日期：</span>
                                                        <DatePicker
                                                            disabledDate={this.disabledStartDate.bind(this)}
                                                            format="YYYY-MM-DD"
                                                            value={startValue}
                                                            placeholder="开始日期"
                                                            onChange={this.onStartChange.bind(this)}
                                                            onOpenChange={this.handleStartOpenChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>截止日期：</span>
                                                        <DatePicker
                                                            disabledDate={this.disabledEndDate.bind(this)}
                                                            format="YYYY-MM-DD"
                                                            value={endValue}
                                                            placeholder="结束日期"
                                                            onChange={this.onEndChange.bind(this)}
                                                            open={endOpen}
                                                            onOpenChange={this.handleEndOpenChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>收费人员：</span>
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
                                                        <span>数据状态：</span>
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
                                                        <span>交易类型：</span>
                                                        <div className="ipt">
                                                            <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                                <Option value="all">全部</Option>
                                                                <Option value="pb">未抄表</Option>
                                                                <Option value="yc">已抄表</Option>
                                                                <Option value="kb">已审核</Option>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                                   <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>基本信息：</span>
                                                        <div className="ipt">
                                                            <Input placeholder="户号/姓名/电话/身份证" size="default"/>
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
                                        <div className="userhandle-md line" ref="lineReact">

                                        </div>
                                    </div>
                                    <TABLE />
                                </div>
                            </div>
                        </div>
                    </div>*/
