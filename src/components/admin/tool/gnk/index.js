'use strict';
import React from 'react';
import './index.scss';
import { Radio , Button , Input } from 'antd';
import { DatePicker } from 'antd';
const RadioGroup = Radio.Group;

class gnk extends React.Component {

    constructor() {
        super();
        this.state = {
            startValue: null,
            endValue: null,
            value : 1 ,
        };
    }
    disabledStartDate (startValue) {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();

    };
    onChange(field, value) {
        this.setState({
            [field]: value,
        });
    };
    
    onStartChange (value) {
        this.onChange('startValue', value);

    }

    componentWillMount() {

    }
    
    componentDidMount() {
       

    }

     onRadioChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value
        });
    }


    //表格数据
    render() {
        const { startValue} = this.state;
        return (
            <div className="index_right_cont_container">
                <div className="container_out">
                    {/*内容*/}
                    <div className='MainToolGnk'>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>卡识别</h3>
                                <div className='cont'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                            <p>密钥类型：<span>未知</span></p>        
                                             <p>卡片类型：<span>未知</span></p>
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                        <Button type="primary">卡识别</Button>
                                        <Button type="primary">初始化</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>密钥下装卡</h3>
                                 <div className='cont2'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                             <span>有效次数：</span>
                                                <div className="ipt">
                                                    <Input placeholder="有效次数" size="default"/>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                        <Button type="primary">密钥下装卡</Button>
                                    </div>
                                </div>
                                <div className='cont2'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                            <p>密钥类型：<span>未知</span></p>        
                                             <p>剩余次数：<span>未知</span></p>
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                       <Button type="primary">读密钥下装卡</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>阀门测试卡</h3>
                                 <div className='cont'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                            <span>密钥类型：</span>
                                            <RadioGroup onChange={this.onRadioChange.bind(this)} value={this.state.value}>
                                                <Radio value={1}>公有密钥</Radio>
                                                <Radio value={2}>私有密钥</Radio>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                        <Button type="primary">生成阀门卡</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                <h3 className='title'>校时卡</h3>
                                 <div className='cont2'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                            <div style={{marginBottom:'20px'}}>
                                                 <span>校正日期：</span>
                                                 <DatePicker
                                                    disabledDate={this.disabledStartDate.bind(this)}
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                    value={startValue}
                                                    placeholder="校正日期"
                                                    onChange={this.onStartChange.bind(this)}
                                                />
                                            </div>
                                            <div>
                                                <span>密钥类型：</span>
                                                <RadioGroup onChange={this.onRadioChange.bind(this)} value={this.state.value}>
                                                    <Radio value={1}>公有密钥</Radio>
                                                    <Radio value={2}>私有密钥</Radio>
                                                </RadioGroup>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                        <Button type="primary">生成校时卡</Button>
                                    </div>
                                </div>
                                 <div className='cont2'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                            <p>校正日期：<span>未知</span></p>        
                                            <p>密钥类型：<span>未知</span></p>        
                                            <p>使用次数：<span>未知</span></p>
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                        <Button type="primary">卡识别</Button>
                                        <Button type="primary">初始化</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='main-col-1'>
                            <div className='main-inner'>
                                 <h3 className='title'>密钥恢复卡</h3>
                                <div className='cont2'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                             <span>有效次数：</span>
                                                <div className="ipt">
                                                    <Input placeholder="有效次数" size="default"/>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                        <Button type="primary">密钥恢复卡</Button>
                                    </div>
                                </div>
                                <div className='cont2'>
                                    <div className='cont-col-1'>
                                        <div className='cont-col-1-1'>
                                            <p>密钥类型：<span>未知</span></p>        
                                             <p>剩余次数：<span>未知</span></p>
                                        </div>
                                    </div>
                                    <div className='cont-col-1'>
                                       <Button type="primary">读密钥下装卡</Button>
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

export default gnk;
