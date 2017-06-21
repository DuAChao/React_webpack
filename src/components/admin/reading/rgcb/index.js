'use strict';
import React from 'react';
import './index.scss';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入面饼图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import { Menu , Dropdown , Button , Icon , Input , Select , Tooltip , DatePicker} from 'antd';

const { MonthPicker } = DatePicker;
/**表格*/
import TABLE from '../../../../common/components/table';
import TREE from '../../../../common/components/tree';
const SubMenu = Menu.SubMenu; 
class rgcb extends React.Component { 
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
        var myChart = echarts.init(this.refs.pieReact);
        // 绘制图表
        myChart.setOption({
            color: ['#E96B3A','#3384D5'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['未抄','停抄']
            },
            series: [
                {
                    name:'用户状态',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:75, name:'未抄'},
                        {value:51, name:'停抄'}
                    ]
                }
            ]
        });
    }



    //表格数据
    render() {
        // 下拉菜单

        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick} style={{ width: 100 }}>
                <SubMenu title="打印">
                    <Menu.Item>全部</Menu.Item>
                    <Menu.Item>当前</Menu.Item>
                    <Menu.Item>已选</Menu.Item>
                </SubMenu>
                <SubMenu title="导出">
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
                            <div className='chart'>
                                <div className='comIn' ref="pieReact"></div>
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
                                    <div className='tabLine-col'>
                                        <Dropdown overlay={menu} placement="bottomCenter">
                                            <a className="ant-dropdown-link" href="JavaScript:;">
                                                数据操作 <Icon type="down" />
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
                                                    <h3>用户状态：</h3>
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
                                                    <h3>水表类型：</h3>
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

export default rgcb;

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
                            <Dropdown overlay={menu}>
                                <Button>
                                    数据输出 <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
          
                    <div className="UserReadingRgcbOut">
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
                                                        <span>基本信息：</span>
                                                        <div className="ipt">
                                                            <Input placeholder="户号/姓名/电话/身份证" size="default"/>
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
                                                        <span>用户状态：</span>
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
                                                        <span>水表类型：</span>
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