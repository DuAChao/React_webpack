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
import { InputNumber , AutoComplete , Menu , Dropdown , Button , Icon , Input , Select , Tooltip } from 'antd';
import { DatePicker } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
const { MonthPicker } = DatePicker;
/**表格*/
import TABLE from '../../../../common/components/table';
import TREE from '../../../../common/components/tree';
class ysdt extends React.Component {
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
                bottom: '2%',
                top:'8%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['不确定'],
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
                    barWidth: '18%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data:[1323]
                }
            ]
        });
    }
    //表格数据
    render() {
        const { startValue, endValue, endOpen } = this.state;
        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick} style={{ width: 120 }}>
                <Menu.Item key="1">全部</Menu.Item>
                <Menu.Item key="2">当前页</Menu.Item>
                <Menu.Item key="3">选中项</Menu.Item>
            </Menu>
        );
        const menu1 = (
            <Menu onClick={handleMenuClick} style={{ width: 120 }}>
                <Menu.Item key="1">全部</Menu.Item>
                <Menu.Item key="2">当前页</Menu.Item>
                <Menu.Item key="3">选中项</Menu.Item>
            </Menu>
        );
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
                                <div className='tabLine-col'>
                                    <Dropdown overlay={menu1} placement="bottomCenter">
                                        <a className="ant-dropdown-link" href="JavaScript:;">
                                            导出 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
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
                                                <h3>基本信息：</h3>
                                                <div className="ipt">
                                                    <Input placeholder="户号/姓名/电话/身份证" size="default"/>
                                                </div>
                                            </div>
                                        </div>
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
                                                 <h3>用水类型：</h3>
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
                                                <h3>波动状态：</h3>
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
                                                <h3>匹配状态：</h3>
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
                                                <h3 style={{display:'inline-block',verticalAlign:'middle'}}>区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：</h3>
                                                <div className="ipt">
                                                    <InputGroup compact>
                                                        <Select defaultValue="average">
                                                            <Option value="average">平均量</Option>
                                                            <Option value="Sign In">同期比</Option>
                                                        </Select>
                                                        <AutoComplete
                                                            style={{ width: 120 ,marginBottom:'3px' }}
                                                            placeholder="区间"
                                                        />
                                                    </InputGroup>
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

export default ysdt;


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
           
                    <div className="UserWaterYsdtOut">
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
                                                        <span>基本信息：</span>
                                                        <div className="ipt">
                                                            <Input placeholder="户号/姓名/电话/身份证" size="default"/>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                        <span>用水类型：</span>
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
                                                        <span>波动状态：</span>
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
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>匹配状态：</span>
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
                                                <div className="userhandle-right">
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
                                                <div className="userhandle-right">
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


                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span style={{display:'inline-block',verticalAlign:'middle'}}>区&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：</span>
                                                        <div className="ipt">
                                                            <InputGroup compact>
                                                                <Select defaultValue="average">
                                                                    <Option value="average">平均量</Option>
                                                                    <Option value="Sign In">同期比</Option>
                                                                </Select>
                                                                <AutoComplete
                                                                    style={{ width: 120 ,marginBottom:'3px' }}
                                                                    placeholder="区间"
                                                                />
                                                            </InputGroup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                                                        <div className="ipt">
                                                            <InputNumber min={1} max={10} defaultValue={3} />
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
