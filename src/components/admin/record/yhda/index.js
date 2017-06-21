/**
 * Created by Administrator on 2017-04-01.
 */
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
/**表格*/
import TABLE from './table';
import TREE from '../../../../common/components/tree';

import {exportExcel} from '../../../../common/components/common/excel';


const SubMenu = Menu.SubMenu;

const {PropTypes} = React;

class yhda extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            startValue: null,
            endValue: null,
            endOpen: false
        };
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    static defaultProps = {
        data: [
            {key: '1', name: '张三', UserNo: '01010015', phone:'18000000000', type:'居民', address: 'New York No. 1 Lake Park',},
            {key: '2', name: '李四', UserNo: '01010016', phone:'18000000000', type:'居民', address: 'London No. 1 Lake Park',},
            {key: '3', name: '小红', UserNo: '01010014', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '4', name: '小明', UserNo: '01010012', phone:'18000000000', type:'商铺', address: 'Sidney No. 1 Lake Park',},
            {key: '5', name: '李大钊', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '6', name: '李大炮', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '7', name: '李小鹏', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '8', name: '吴江市', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '9', name: '李达康', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '10', name: '李西西', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
            {key: '11', name: '贾维斯', UserNo: '01010012', phone:'18000000000', type:'居民', address: 'Sidney No. 1 Lake Park',},
        ]
    };

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

    componentWillMount() {}
    
    componentDidMount() {
        /** 基于准备好的dom，初始化echarts实例**/
        var myChart = echarts.init(this.refs.pieReact);
        myChart.setOption({
            color: ['#3FB1E3','#6BE6C1','#626C91','#A0A7E6','#C4EBAD','#96DEE8'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['已开户','已销户','已报停','停表']
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
                        {value:75, name:'已开户'},
                        {value:51, name:'已销户'},
                        {value:22, name:'已报停'},
                        {value:11, name:'停表'}
                    ]
                }
            ] 
        });
    } 
    /**导出excel*/
    exportClick() { 
        let excelResult = this.state.data;
        let excelData = []; 
        excelData[0] = ['姓名','客户户号','电话','用户类型','地址'];
        excelResult.forEach(function(e, i) {
            let n = i + 1;
            excelData[n] = [];
            excelData[n][0] = e.name || '--';
            excelData[n][1] = e.UserNo || '--';
            excelData[n][2] = e.phone || '--';
            excelData[n][3] = e.type || '--';
            excelData[n][4] = e.address || '--';
        });
        let fileName =  '用户档案';
        exportExcel(excelData, fileName);
    }

    render() {
        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick} style={{ width: 120 }}>
                <Menu.Item key="1">新增用户</Menu.Item>
                <Menu.Item key="2">用户类型设置</Menu.Item>
                <Menu.Item key="3">通道号录入</Menu.Item>
                <SubMenu title="导入普表资料">
                    <Menu.Item>导入数据</Menu.Item>
                    <Menu.Item>导出模板</Menu.Item>
                </SubMenu>
                <SubMenu title="导入远程资料">
                    <Menu.Item>导入数据</Menu.Item>
                    <Menu.Item>导出模板</Menu.Item>
                </SubMenu>
                <SubMenu title="打印缴费卡">
                    <Menu.Item>全部</Menu.Item>
                    <Menu.Item>当前</Menu.Item>
                    <Menu.Item>已选</Menu.Item>
                </SubMenu>
            </Menu>
        );
        const { startValue, endValue, endOpen } = this.state;
        const tableData = {
            UserInfoData : this.state.data ,
        };  
        return ( 
            <div className="index_right_cont_container">
                <div className="container_out UserRecordyhdaOut">
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
                                <div className='comIn' ref="pieReact" ></div>
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
                                    <div className='tabLine-col' >
                                        <Icon type="search" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title={'导出'}>
                                    <div className='tabLine-col'  onClick={this.exportClick.bind(this)}>
                                        <Icon type="cloud-download-o" />
                                    </div>
                                </Tooltip>
                                <div className='tabLine-col'>
                                     <Dropdown overlay={menu} placement="bottomCenter">
                                        <a className="ant-dropdown-link" href="JavaScript:;">
                                        用户操作 <Icon type="down" />
                                        </a>
                                    </Dropdown> 
                                </div> 
                            </div>
                            <div className='commonInfo'>
                                <div className='UserHandle'>
                                    <div className='comIn iptList'>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>起始日期：</h3>
                                                <DatePicker
                                                    disabledDate={this.disabledStartDate.bind(this)}
                                                    format="YYYY-MM-DD"
                                                    value={startValue}
                                                    placeholder="开始日期"
                                                    onChange={this.onStartChange.bind(this)}
                                                    onOpenChange={this.handleStartOpenChange.bind(this)}
                                                />
                                                <span className='line' />
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
                                                 <h3>用水类型：</h3>
                                                <div className="ipt">
                                                    <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                        <Option value="all">全部</Option>
                                                        <Option value="pb">生活（一户）</Option>
                                                        <Option value="yc">生活（总表）</Option>
                                                        <Option value="kb">行政事业</Option>
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
                                                        <Option value="pb">已销户</Option>
                                                        <Option value="yc">已开户</Option>
                                                        <Option value="kb">已报停</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>特殊费用：</h3>
                                                <div className="ipt">
                                                    <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                        <Option value="all">全部</Option>
                                                        <Option value="pb">面积</Option>
                                                        <Option value="yc">人口</Option>
                                                        <Option value="kb">当前止度</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>特殊标识：</h3>
                                                <div className="ipt">
                                                    <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                        <Option value="all">全部</Option>
                                                        <Option value="pb">不收费</Option>
                                                        <Option value="yc">增值税</Option>
                                                        <Option value="kb">优惠</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='iptList-col'>
                                            <div className='iptList-col-1'>
                                                <h3>操作人员：</h3>
                                                <div className="ipt">
                                                    <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                                        <Option value="all">全部</Option>
                                                        <Option value="pb">系统</Option>
                                                        <Option value="yc">admin</Option>
                                                        <Option value="kb">优惠</Option>
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
                                        <TABLE {...tableData}/>
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

export default yhda;