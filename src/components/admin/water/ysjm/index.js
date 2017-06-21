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
import {Menu , Dropdown , Checkbox, Button , Input ,Icon , Tooltip } from 'antd';
/**表格*/
import TABLE from '../../../../common/components/table';
const CheckboxGroup = Checkbox.Group;

class ysjm extends React.Component {

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
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                type : 'category',
                data: ['比例', '定量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'10%',
                containLabel: true
            },
            xAxis: {
                 type: 'category',
                 data: ['非居民生活用水']
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            series: [
                {
                    name: '比例',
                    type: 'bar',
                    barWidth:'30%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: [100,]
                },
                {
                    name: '定量',
                    type: 'bar',
                    barWidth:'20%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: [0]
                }
            ]
        });
    }

    onChange(checkedValues) {
            console.log('checked = ', checkedValues);
        }


    //表格数据
    render() {
        const plainOptions = ['只显示可操作的数据'];
        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick} style={{ width: 140 }}>
                <Menu.Item key="1" disabled>水费补偿</Menu.Item>
                <Menu.Item key="2">批量删除</Menu.Item>
                <Menu.Item key="3">批量减免违约金</Menu.Item>
                <Menu.Item key="4">取消违约金减免</Menu.Item>
                <Menu.Item key="5">分期收款</Menu.Item>
            </Menu>
        );
        return (
            <div className="index_right_cont_container">
                <div className="container_out">
                    <div className='LeftContainer'>
                        <div className='commonInner'>
                            <div className='chart' >
                                <div className='comIn' ref="pieReact" />
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
                                <Tooltip placement="top" title={'用户明细'}>
                                    <div className='tabLine-col'>
                                        <Icon type="user" />
                                    </div>
                                </Tooltip>
                                <div className='tabLine-col'>
                                    <Dropdown overlay={menu} placement="bottomCenter">
                                        <a className="ant-dropdown-link" href="JavaScript:;">
                                            特殊处理 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className='tabLine-col'>
                                     <span style={{marginRight:'6px'}}>筛选</span>
                                     <div style={{display:'inline-block'}}>
                                         <CheckboxGroup options={plainOptions} defaultValue={['只显示可操作的数据']} onChange={this.onChange} />
                                     </div>
                                </div>
                            </div>
                            <div className='commonInfo'>
                                <div className='UserHandle'>
                                    <div className='comIn iptList'>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>用户查询：</h3>
                                                <div className="ipt">
                                                    <Input placeholder="户号/姓名/电话/身份证" size="default"/>
                                                </div>
                                                <div className="ipt" style={{marginLeft:'6px'}}>
                                                    <Button type="primary">搜索</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>基本信息：</h3>
                                                <div className="ipt">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>抄表人员：</h3>
                                                <div className="ipt">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>操作人员：</h3>
                                                <div className="ipt">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                 <h3>用户状态：</h3>
                                                <div className="ipt">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>抄表日期：</h3>
                                                <div className="ipt">
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>抄表日期：</h3>
                                                <div className="ipt">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                               <h3>水表类型：</h3>
                                                <div className="ipt">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                
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

export default ysjm;


{/*<div className="toolbar">
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="bars">列设置</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="user">用户明细</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Button type="primary" icon="check-circle-o">水费补偿</Button>
                        </div>
                         <div className="toolbar-md-1">
                            <Button type="primary" icon="delete">批量删除</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <span style={{marginRight:'6px'}}>筛选</span>
                            <CheckboxGroup options={plainOptions} defaultValue={['只显示可操作的数据']} onChange={this.onChange} />
                        </div>
                    </div>
              
                    <div className="UserWaterYsjm">
                        <div className="UserRecorin UserRecorTable">
                            <div className="bd">
                                <div className="toolbtn"></div>
                                <div className="cont">
                                    <div className="userhandle">
                                        <div className="userhandle-md handleArea">
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-left" style={{height:'20%'}}>
                                                    <div className='userhandle-col-1'>
                                                        <span>用户查询：</span>
                                                        <div className="ipt">
                                                            <Input placeholder="户号/姓名/电话/身份证" size="default"/>
                                                        </div>
                                                        <div className="ipt" style={{marginLeft:'6px'}}>
                                                            <Button type="primary">搜索</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>用户姓名：</span>
                                                        <div className="ipt">李四</div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>联系地址：</span>
                                                        <div className="ipt">1212-89-56</div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>联系电话：</span>
                                                        <div className="ipt">18000000000</div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>水表表号：</span>
                                                        <div className="ipt">01010015</div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-left">
                                                    <div className='userhandle-col-1'>
                                                        <span>父表表号：</span>
                                                        <div className="ipt">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>用水人数：</span>
                                                        <div className="ipt">
                                                            6
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>住房面积：</span>
                                                        <div className="ipt">
                                                            300
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>当前余额：</span>
                                                        <div className="ipt">
                                                            300
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>当前止度：</span>
                                                        <div className="ipt">
                                                            300
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>抄表本名：</span>
                                                        <div className="ipt">
                                                            李大钊
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="userhandle-right">
                                                    <div className='userhandle-col-1'>
                                                        <span>特殊标识：</span>
                                                        <div className="ipt">
                                                            
                                                        </div>
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
