/**
 * Created by Administrator on 2017-04-01.
 */
'use strict';
import React from 'react';
import './index.scss';
// import DatePicker from '../../../../common/components/PC/DatePicker';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入面饼图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/axis';
import 'echarts/lib/component/dataZoom';
import {DatePicker ,Select ,message , Checkbox , AutoComplete , Radio , Menu , Dropdown , Button , Icon , Input , Tooltip  } from 'antd';
const Option = Select.Option;
const InputGroup = Input.Group;

class sftj extends React.Component {

    constructor() {
        super();
        this.state={
            value : 1 ,
            isfocus : true,
            startValue: null,
            endValue: null,
            endOpen: false
        };
    }

    componentWillMount() {}
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.refs.lineReact);
        // 绘制图表
        myChart.setOption({
            color: ['#59C4E6','#93B7E3','#EDAFDA','#93B7E3','#A5E7F0','#CBB0E3'],
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#000'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: false, readOnly: false},
                    magicType: {show: false, type: ['line']},
                    restore: {show: false},
                    saveAsImage: {show: false}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            legend: {
                show:true,
                right:"center",
                itemGap:50,
                top:'20px',
                data:['数量','金额']
            },
             dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 65,
                    end: 85
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 65,
                    end: 85
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    data: ['2017年1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月','2017年1月','2017年1月','2017年1月','2017年1月','2017年1月'],
                    axisPointer: {
                        type: 'line'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '',
                    min: 0,
                    max:200,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                }
            ],
            series : [
                {
                    name:'数量',
                    type:'line',
                    smooth: true,//折线平滑过渡
                    smoothMonotone:'x',
                    //symbolSize: 2,//折线中的小圆点
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[12.0, 14.9, 17.0, 123.2, 125.6, 176.7, 135.6, 162.2, 132.6, 120.0, 16.4, 13.3, 13.3, 13.3, 13.3, 13.3, 13.3]
                },
                { 
                    name:'金额',
                    type:'line',
                    smooth: true,//折线平滑过渡
                    smoothMonotone:'x',
                    //symbolSize: 2,//折线中的小圆点
                    areaStyle: {normal: {}},
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 13.3, 13.3, 13.3, 13.3, 13.3]
                }
            ]
            
        });
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

    //表格数据
    render() {
        function handleChange(value) {
            console.log(value);
        }
        // 下拉菜单
        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">明细报表</Menu.Item>
                <Menu.Item key="2">金额报表</Menu.Item>
            </Menu>
        );

        const { startValue, endValue, endOpen } = this.state;
        return (
            <div className="index_right_cont_container">
                <div className="container_out">

                    <div className='RightContainer' style={{width:'100%'}}>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
                                <div className='tabLine-col'>
                                    <div className='tabLine-col-1'>
                                        <DatePicker
                                            size='large'
                                            disabledDate={this.disabledStartDate.bind(this)}
                                            format="YYYY-MM-DD"
                                            value={startValue}
                                            placeholder="开始日期"
                                            onChange={this.onStartChange.bind(this)}
                                            onOpenChange={this.handleStartOpenChange.bind(this)}
                                        />
                                        &nbsp;&nbsp;
                                        <DatePicker
                                            size='large'
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
                                <div className='tabLine-col'>
                                    <h3>公司：</h3>
                                    <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                        <Option value="all">全部</Option>
                                        <Option value="pb">已销户</Option>
                                        <Option value="yc">已开户</Option>
                                        <Option value="kb">已报停</Option>
                                    </Select>
                                </div>
                                <div className='tabLine-col'>
                                    <h3>操作员：</h3>
                                    <Select labelInValue defaultValue={{ key: 'all' }} style={{ width: 120 }}>
                                        <Option value="all">全部</Option>
                                        <Option value="pb">已销户</Option>
                                        <Option value="yc">已开户</Option>
                                        <Option value="kb">已报停</Option>
                                    </Select> 
                                </div>
                                <div className='tabLine-col'>  
                                    <div className='tabLine-col-1'>
                                        <Button type="primary">统计</Button>
                                    </div>
                                </div>
                                <div className='tabLine-col'>
                                    <Dropdown overlay={menu} placement="bottomCenter">
                                        <a className="ant-dropdown-link" href="JavaScript:;">
                                            报表 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='commonInfo'>
                                <div className='TableContainer' style={{height:'100%'}}>
                                    <div className='TopInfo'>
                                        <div className='comIn1'>
                                            <div className="leftCont">
                                                <div className='comIn1' style={{background:'#FFF'}}>
                                                    <div className='leftCont-col'>
                                                        <div className='MoneyInfo'>
                                                            <div className='IconOut'>
                                                                <i className='iconfont icon-shoufeiguanli' style={{color:'#E36D3E'}}></i>
                                                            </div>
                                                            <div className='MoneyInfo-col'>
                                                                <h3 className='Title'>普表收费：</h3>
                                                                <h3 className='totalNum' style={{color:'#E36D3E'}}>2000000.00</h3>
                                                                <div className='Tips'>
                                                                    <div className='Tips-col'>预存<span>100</span>笔</div>
                                                                    <div className='Tips-col'>作废<span className='error'>2</span>笔</div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='leftCont-col'>
                                                        
                                                        <div className='MoneyInfo'>
                                                            <div className='IconOut'>
                                                                <i className='iconfont icon-shui' style={{color:'#40A42B'}}></i>
                                                            </div>
                                                             <div className='MoneyInfo-col'>
                                                                <h3 className='Title'>水费预存：</h3>
                                                                <h3 className='totalNum' style={{color:'#40A42B'}}>20000.00</h3>
                                                                <div className='Tips'>
                                                                    <div className='Tips-col'>预存<span>100</span>笔</div>
                                                                    <div className='Tips-col'>作废<span className='error'>2</span>笔</div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='leftCont-col'>
                                                        
                                                        <div className='MoneyInfo Last'>
                                                            <div className='IconOut'>
                                                                <i className='iconfont icon-4' style={{color:'#A42CA3',fontSize:'26px'}}></i>
                                                            </div>
                                                             <div className='MoneyInfo-col'>
                                                                <h3 className='Title'>卡表充值：</h3>
                                                                <h3 className='totalNum' style={{color:'#B24DB1'}}>20000.00</h3>
                                                                <div className='Tips'>
                                                                    <div className='Tips-col'>预存<span>100</span>笔</div>
                                                                    <div className='Tips-col'>作废<span className='error'>2</span>笔</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rightCont">
                                                <div className='comIn1' style={{background:'#FFF'}}>
                                                    <div className="rightCont-col">
                                                        <div className='IconOut'>
                                                            <i className='iconfont icon-xianjin1'></i>
                                                        </div>
                                                        <div className='rightCont-col-1'>
                                                            <span className='title'>现金（元）</span>
                                                            <span className='money' style={{color:'#F08184'}}>50000</span>
                                                        </div>
                                                    </div>
                                                    <div className="rightCont-col" style={{background:'#F8F9FA'}}>
                                                        <div className='IconOut' style={{background:'#F8B368'}}>
                                                            <i className='iconfont icon-zhuanzhang'></i>
                                                        </div>
                                                        <div className='rightCont-col-1'>
                                                            <span className='title'>转账（元）</span>
                                                            <span className='money' style={{color:'#F8B368'}}>50000</span>
                                                        </div>
                                                    </div>
                                                    <div className="rightCont-col">
                                                        <div className='IconOut' style={{background:'#35ACD6'}}>
                                                            <i className='iconfont icon-xianjin'></i>
                                                        </div>
                                                        <div className='rightCont-col-1'>
                                                            <span className='title'>合计（元）</span>
                                                            <span className='money' style={{color:'#35ACD6'}}>100000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='BottomChart'>
                                        <div className='comIn' ref="lineReact" style={{background:'#FFF'}}></div>
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
export default sftj; 
   

     {/*<div className="container_common container_common_1">
                        <div className="toolbar">
                     
                            <div className="toolbar_md_1 datePicker">
                                <DatePicker
                                    disabledDate={this.disabledStartDate.bind(this)}
                                    format="YYYY-MM-DD"
                                    value={startValue}
                                    placeholder="开始日期"
                                    onChange={this.onStartChange.bind(this)}
                                    onOpenChange={this.handleStartOpenChange.bind(this)}
                                />
                                &nbsp;
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
                     
                            <div className="toolbar_md_1 company">
                                <i className="iconfont icon-gongsi" />
                                <Select labelInValue defaultValue={{ key: 'lucy' }} onChange={handleChange}>
                                    <Option value="jack">中水云联</Option>
                                    <Option value="lucy">中山一路 (101)</Option>
                                </Select>
                            </div>
                  
                            <div className="toolbar_md_1 operator">
                                <i className="iconfont icon-guanliyuan" />
                                <Select labelInValue defaultValue={{ key: 'lucy' }} onChange={handleChange}>
                                    <Option value="jack">王二炮</Option>
                                    <Option value="lucy">玩三炮</Option>
                                </Select>
                            </div>
                  
                            <div className="toolbar_md_1 Statistics">
                                <Button type="primary" style={{margin:"0 6px"}}>统计</Button>
                            </div>
                  
                            <div className="toolbar_md_1 Report">
                                <Dropdown overlay={menu}>
                                    <Button>
                                        报表 <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="MoneyInfo clearfloat">
                            <div className="MoneyInfo-md-1">
                                <div className="MoneyInfo-in clearfloat">
                                    <div className="MoneyInfo-in-left">
                                        <h3 className="word title">普<br/>表<br/>收<br/>费</h3>
                                    </div>
                                    <div className="MoneyInfo-in-right">
                                        <i className="bgicon iconfont icon-shoufeiguanli" />
                                        <div className="word">
                                            <p className="titlemoney"><i className="iconfont icon-renminbi"/><span>50000</span></p>
                                            <p>预存<span>2</span>笔</p>
                                            <p>作废<span>4</span>笔</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MoneyInfo-md-1" style={{width:'33.34%'}}>
                                <div className="MoneyInfo-in clearfloat">
                                    <div className="MoneyInfo-in-left" style={{background:'#43B884'}}>
                                        <h3 className="word title">水<br/>费<br/>预<br/>存</h3></div>
                                    <div className="MoneyInfo-in-right" style={{background:'#50C195'}}>
                                        <i className="bgicon iconfont icon-shoufeiguanli" />
                                        <div className="word">
                                            <p className="titlemoney"><i className="iconfont icon-renminbi"/><span>50000</span></p>
                                            <p>预存<span>2</span>笔</p>
                                            <p>作废<span>4</span>笔</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MoneyInfo-md-1">
                                <div className="MoneyInfo-in clearfloat">
                                    <div className="MoneyInfo-in-left" style={{background:'#907CB0'}}>
                                        <h3 className="word title">卡<br/>表<br/>充<br/>值</h3>
                                    </div>
                                    <div className="MoneyInfo-in-right" style={{background:'#9C8CB9'}}>
                                        <i className="bgicon iconfont icon-shoufeiguanli" />
                                        <div className="word">
                                            <p className="titlemoney"><i className="iconfont icon-renminbi" /><span>50000</span></p>
                                            <p>预存<span>2</span>笔</p>
                                            <p>作废<span>4</span>笔</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_common container_common_2">
                        <div className="MoneyInfo-1">
                            <div className="out">
                                <div className="out-md-1">
                                    <div className="inner">
                                        <div className="common_ icon-out cash"><i className="iconfont icon-xianjin1" /></div>
                                        <div className="common_ word">
                                            <div className="word_">
                                                <p className="num">50000</p>
                                                <p>现金（元）</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="out-md-1" style={{width:'33.34%'}}>
                                    <div className="inner">
                                        <div className="common_ icon-out Transfer"><i className="iconfont icon-zhuanzhang"/></div>
                                        <div className="common_ word">
                                            <div className="word_">
                                                <p className="Transfernum">50000</p>
                                                <p>转账（元）</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="out-md-1">
                                    <div className="inner">
                                        <div className="common_ icon-out total"><i className="iconfont icon-xianjin"/></div>
                                        <div className="common_ word">
                                            <div className="word_">
                                                <p className="totalnum">50000</p>
                                                <p>合计（元）</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_common container_common_3">
                        <div className="chart" ref="lineReact" style={{height:'100%'}}></div>
                    </div>*/}
