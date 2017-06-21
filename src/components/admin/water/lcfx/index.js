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
import { InputNumber , Menu , Dropdown , Button , Icon , Input , Select , Tooltip  } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker } = DatePicker;

/**表格*/
import TABLE from '../../../../common/components/table';
import TREE from '../../../../common/components/tree';

const SubMenu = Menu.SubMenu;

class lcfx extends React.Component {
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
                bottom: '3%',
                top:'6%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['户数', '月数'],
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
                    barWidth: '60%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data:[10,334]
                }
            ]
        });
    }
    render() {
        function handleMenuClick(e) {
            console.log('click', e);
        } 
        const menu = (
            <Menu onClick={handleMenuClick} style={{ width: 120 }}>
                <SubMenu title="漏抄用户清单">
                    <Menu.Item>全部</Menu.Item>
                    <Menu.Item>当前</Menu.Item>
                    <Menu.Item>已选</Menu.Item>
                </SubMenu>
                <SubMenu title="抄表漏抄率">
                    <Menu.Item>全部</Menu.Item>
                    <Menu.Item>当前</Menu.Item>
                    <Menu.Item>已选</Menu.Item>
                </SubMenu>
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
                            <div className='chart' >
                                <div className='comIn' ref="lineReact"/>
                            </div>
                        </div>
                    </div>
                    <div className='RightContainer'>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
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
                                        打印 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='commonInfo'>
                                <div className='UserHandle'>
                                    <div className='comIn iptList'>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>开始月份：</h3>
                                                <div className='ipt'>
                                                    <MonthPicker
                                                            disabledDate={this.disabledStartDate.bind(this)}
                                                            format="YYYY-MM"
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
                                                    <MonthPicker
                                                        disabledDate={this.disabledStartDate.bind(this)}
                                                        format="YYYY-MM"
                                                        value={startValue}
                                                        placeholder="截止月份"
                                                        onChange={this.onStartChange.bind(this)}
                                                        onOpenChange={this.handleStartOpenChange.bind(this)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>水表类型：</h3>
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
                                                <h3>次数区间：</h3>
                                                <div className="ipt">
                                                    <Input placeholder="次数区间" size="default"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</h3>
                                                <div className="ipt">
                                                    <InputNumber min={1} max={10} defaultValue={3} />
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
                                                        <Option value="kb">套表</Option>
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

export default lcfx;

{/*<div className="toolbar">
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="bars">列设置</Button>
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
                                    打印 <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
               
                    <div className="UserWaterLcfxOut">
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
                                                        <span>开始月份：</span>
                                                        <MonthPicker
                                                            disabledDate={this.disabledStartDate.bind(this)}
                                                            format="YYYY-MM"
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
                                                        <MonthPicker
                                                            disabledDate={this.disabledStartDate.bind(this)}
                                                            format="YYYY-MM"
                                                            value={startValue}
                                                            placeholder="截止月份"
                                                            onChange={this.onStartChange.bind(this)}
                                                            onOpenChange={this.handleStartOpenChange.bind(this)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>水表类型：</span>
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
                                                        <span>次数区间：</span>
                                                        <div className="ipt">
                                                            <div className="ipt">
                                                                <Input placeholder="次数区间" size="default"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                                                        <div className="ipt">
                                                            <InputNumber min={1} max={10} defaultValue={3} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>抄表人员：</span>
                                                        <div className="ipt">
                                                            <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                                <Option value="all">全部</Option>
                                                                <Option value="pb">普表</Option>
                                                                <Option value="yc">远传</Option>
                                                                <Option value="kb">套表</Option>
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
                    </div>*/}
