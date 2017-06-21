/**
 * Created by Administrator on 2017-04-01.
 */
'use strict';
import React from 'react';
import './index.scss';
import { Button , Input , Select , Icon , Tooltip} from 'antd';
/**表格*/
import TABLE from '../../../../common/components/table';
import TREE from '../../../../common/components/tree';

class yhbg extends React.Component {

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
    
    }



    //表格数据
    render() {
        
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div className="index_right_cont_container">
                <div className="container_out recordYhbg">
                   <div className='LeftContainer'>
                       <div className='commonInner'>
                           <div className='companyTree'>
                               <div className='comIn'>
                                   <h2 className='companyName'><Icon type="home" />西充鸿源水务</h2>
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

export default yhbg;
