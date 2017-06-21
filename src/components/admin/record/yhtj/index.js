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
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import { Button , DatePicker , Icon , Tooltip} from 'antd';

/**表格*/
import TREE from '../../../../common/components/tree';
class yhda extends React.Component {

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
        let mypieChart = echarts.init(this.refs.pie);
        let mylineChart = echarts.init(this.refs.Line);
        // 绘制图表
        mypieChart.setOption({
            color: ['#82C785','#62B6F3'],
            title : {
                text: '用水类型',
                subtext: '',
                x:'center',
                textStyle:{
                    fontSize:"16px",
                    fontWeight:'normal'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['远传水表','普通水表'],
                show:true
            },
            series : [
                {
                    name: '用水类型',
                    type: 'pie',
                    radius : '75%',//饼图大小
                    center: ['50%', '55%'],
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter:"{b}:{c}(户)"
                        }
                    },
                    data:[
                        {value:111, name:'远传水表'},
                        {value:20, name:'普通水表'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
        mylineChart.setOption({
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
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['新上户', '新开户', '未开户', '新停表'],
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
                    data:[10, 52, 200, 334]
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
                                   <h2 className='companyName'><Icon type="home" /> 西充鸿源水务</h2>
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
                                       <div className='tabLine-col-1'>
                                            <Button type="primary">统计</Button>
                                       </div>
                                   </div>
                                    <Tooltip placement="top" title={'生成报表'}>
                                        <div className='tabLine-col'>
                                            <Icon type="line-chart" />
                                        </div>
                                    </Tooltip>
                                    <Tooltip placement="top" title={'导出用户资料'}>
                                        <div className='tabLine-col'>
                                            <Icon type="cloud-download-o" />
                                        </div>
                                    </Tooltip>
                               </div>
                               <div className='commonInfo'>
                                   <div className='UserHandle' style={{height: '150px'}}>
                                       <div className='comIn TotalList'>
                                           <div className='TotalList-col'>
                                               <div className='comIn color1'>
                                                   <div className='TotalInfo'>
                                                       <div className='TitleName'>区域总户数</div>
                                                       <div className='num'>5550000</div>
                                                   </div>
                                                   <div className='iconOut'>
                                                       <i className="iconfont icon-yonghufangkeshu" style={{fontSize:'55px'}}/>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className='TotalList-col'>
                                               <div className='comIn color2'>
                                                   <div className='TotalInfo'>
                                                       <div className='TitleName'>区域有效总户数</div>
                                                       <div className='num'>5550000</div>
                                                   </div>
                                                   <div className='iconOut'>
                                                       <i className="iconfont icon-youxiao" />
                                                   </div>
                                               </div>
                                           </div>
                                           <div className='TotalList-col'>
                                               <div className='comIn color3'>
                                                   <div className='TotalInfo'>
                                                       <div className='TitleName'>区域未开户总数</div>
                                                       <div className='num'>5550000</div>
                                                   </div>
                                                   <div className='iconOut'>
                                                      <i className="iconfont icon-touzizheyonghuhoutai-weibangding" />
                                                   </div>
                                               </div>
                                           </div>
                                           <div className='TotalList-col'>
                                               <div className='comIn color4'>
                                                   <div className='TotalInfo'>
                                                       <div className='TitleName'>区域已停表总数</div>
                                                       <div className='num'>5550000</div>
                                                   </div>
                                                   <div className='iconOut'>
                                                       <i className="iconfont icon-tingzhi1" />
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className='TableContainer'>
                                       <div className='comIn YhtjChart' >
                                           <div className='LeftLine'>
                                               <div className='comIn' ref='Line'></div>
                                           </div>
                                           <div className='RightPie'>
                                               <div className='comIn' ref="pie"></div>
                                           </div>
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

export default yhda;


  {/*<div className="toolbar" style={{width:'100%'}}>
                        <div className="toolbar-md-1">
                            <DatePicker
                                disabledDate={this.disabledStartDate.bind(this)}
                                format="YYYY-MM-DD"
                                value={startValue}
                                placeholder="开始日期"
                                onChange={this.onStartChange.bind(this)}
                                onOpenChange={this.handleStartOpenChange.bind(this)}
                            />
                        </div>
                        <div className="toolbar-md-1">
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
                        <div className="toolbar-md-1">
                            <Button type="primary">统计</Button>
                        </div>
                        <div className="toolbar-md-1">
                            <Icon type='line-chart' />
                        </div>
                        <div className="toolbar-md-1">
                            <Icon type='cloud-download' />
                        </div>
                    </div>
          
                    <div className="UserRecordyhtjOut">
                        <div className="UserRecorin UserRecorTree">
                            <div className="bd" style={{boxSizing:'border-box',padding:'6px',height:'60%'}}>
                                <div className='comIn'>
                                    <h2 className='companyName'><Icon type="home" />西充鸿源水务</h2>
                                    <div className="TreeCont">
                                        <TREE />
                                    </div>
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
                                              <div className="wordshow wordshow_1">
                                                  <div className="yhtjmes">
                                                      <div className="wordshowin">
                                                          <p className="titlename">区域总户数</p>
                                                          <p className="num">562,256</p>
                                                      </div>
                                                  </div>
                                                  <div className="markicon">
                                                      <i className="iconfont icon-yonghufangkeshu" style={{fontSize:'55px'}}/>
                                                  </div>
                                              </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="wordshow wordshow_2">
                                                    <div className="yhtjmes">
                                                        <div className="wordshowin">
                                                            <p className="titlename">区域有效总户数</p>
                                                            <p className="num">5,656</p>
                                                        </div>
                                                    </div>
                                                    <div className="markicon">
                                                        <i className="iconfont icon-youxiao" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="wordshow wordshow_3">
                                                    <div className="yhtjmes">
                                                        <div className="wordshowin">
                                                            <p className="titlename">区域未开户总数</p>
                                                            <p className="num">8,322,656</p>
                                                        </div>
                                                    </div>
                                                    <div className="markicon">
                                                        <i className="iconfont icon-touzizheyonghuhoutai-weibangding" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="userhandle-md-1">
                                                <div className="wordshow wordshow_4">
                                                    <div className="yhtjmes">
                                                        <div className="wordshowin">
                                                            <p className="titlename">区域已停表总数</p>
                                                            <p className="num">56,356</p>
                                                        </div>
                                                    </div>
                                                    <div className="markicon">
                                                        <i className="iconfont icon-tingzhi1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="yhtjchart">
                                        <div className="yhtjline">
                                            <div className="inner" ref='Line'></div>
                                        </div>
                                        <div className="yhtjpie">
                                            <div className="inner" ref="pie"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
