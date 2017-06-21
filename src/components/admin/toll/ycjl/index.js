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
import { Button , Input , AutoComplete , Select , Icon , Tooltip} from 'antd';
/**表格*/
import TABLE from '../../../../common/components/table';

const InputGroup = Input.Group;
const Option = Select.Option;

class ycjl extends React.Component {

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

    componentWillMount() { }
    
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
                data: ['正常'],
                show:false
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
                 data: ['正常']
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            series: [
                {
                    name: '正常',
                    type: 'bar',
                    barWidth:'30%',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [100]
                }
            ]
        });
    }

    onChange(checkedValues) {
            console.log('checked = ', checkedValues);
        }


    //表格数据
    render() {
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
                                <Tooltip placement="top" title={'当日'}>
                                    <div className='tabLine-col'>
                                        <i className="iconfont icon-ri" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title={'当月'}>
                                    <div className='tabLine-col'>
                                        <i className="iconfont icon-yue" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title={'导出'}>
                                   <div className='tabLine-col'>
                                        <Icon type="cloud-download-o" />
                                    </div>
                                </Tooltip>
                                <div className='tabLine-col'>
                                    <div className='tabLine-col-1'>
                                        <InputGroup compact>
                                            <Select defaultValue="Sign Up" style={{ width: 100 }}>
                                                <Option value="no">户号</Option>
                                                <Option value="username">姓名</Option>
                                                <Option value="invoice number">发票号</Option>
                                                <Option value="serial number">账单流水号</Option>
                                            </Select>
                                            <AutoComplete
                                                style={{ width: 160 , marginBottom:'2px' }}
                                                placeholder="请输入查询条件"
                                            /> 
                                        </InputGroup>
                                    </div>
                                </div>
                                 <div className='tabLine-col'>
                                     <div className='tabLine-col-1'>
                                         <Button type="primary">搜索</Button>
                                     </div> 
                                </div>
                            </div>
                            <div className='commonInfo'>
                                <div className='TableContainer' style={{height:'100%'}}>
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
   
export default ycjl;
