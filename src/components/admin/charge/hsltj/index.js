'use strict';
import React from 'react';
import './index.scss';
import { DatePicker  , Button , Select , Icon , Tooltip } from 'antd';
const Option = Select.Option;
const { MonthPicker } = DatePicker;

class hsltj extends React.Component {

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
    //表格数据
    render() {
        const { startValue, endValue, endOpen } = this.state;
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div className="index_right_cont_container">
                <div className="container_out">

                     <div className='RightContainer' style={{width:'100%'}}>
                        <div className='commonInner RightInfo'>
                            <div className='tabLine'>
                                <div className='tabLine-col'>
                                    <div className='tabLine-col-1'>
                                        <span>开始月份：</span>
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
                                <div className='tabLine-col'>
                                   <div className='tabLine-col-1'>
                                        <span>截止月份：</span>
                                        <div className='ipt'>
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
                                <div className='tabLine-col'>
                                   <div className='tabLine-col-1'>
                                        <span>分厂信息：</span>
                                        <div className='ipt'>
                                            <Select defaultValue="lucy" style={{ width: 140 }} onChange={handleChange}>
                                                <Option value="jack">西充县供排水总公司</Option>
                                                <Option value="lucy">西充县供排水公司</Option>
                                                <Option value="disabled">泯兴水务</Option>
                                            </Select>
                                        </div>
                                   </div>
                                </div>
                                <div className='tabLine-col'>
                                   <div className='tabLine-col-1'>
                                        <span>水表类型：</span>
                                        <div className='ipt'>
                                            <Select defaultValue="lucy" style={{ width: 140 }} onChange={handleChange}>
                                                <Option value="jack">西充县供排水总公司</Option>
                                                <Option value="lucy">西充县供排水公司</Option>
                                                <Option value="disabled">泯兴水务</Option>
                                            </Select>
                                        </div>
                                   </div>
                                </div>
                                <div className='tabLine-col'>
                                   <div className='tabLine-col-1'>
                                        <span>片区管理：</span>
                                        <div className='ipt'>
                                            <Select defaultValue="lucy" style={{ width: 140 }} onChange={handleChange}>
                                                <Option value="jack">西充县供排水总公司</Option>
                                                <Option value="lucy">西充县供排水公司</Option>
                                                <Option value="disabled">泯兴水务</Option>
                                            </Select>
                                        </div>
                                   </div>
                                </div>
                                <Tooltip placement="top" title={'统计'}>
                                    <div className='tabLine-col'>
                                        <Icon type="filter" />
                                    </div>
                                </Tooltip>
                                <Tooltip placement="top" title={'打印'}>
                                    <div className='tabLine-col'>
                                        <Icon type="printer" />
                                    </div>
                                </Tooltip>
                            </div>
                            <div className='commonInfo'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hsltj;
