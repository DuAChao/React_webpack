/**
 * Created by Administrator on 2017-04-01.
 */
/**短信发送*/
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
import { Checkbox , Radio , Icon , Select} from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const Option = Select.Option;


class pbsf extends React.Component {
    constructor() {
        super();
        this.state={
            value : 1 ,
            isfocus : true,
            IptTipsshow:true
        };
    }
    componentDidMount() {
        /**初始自动聚焦*/
        this.refs.textInput.focus();
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.refs.pieReact);
        // 绘制图表
        myChart.setOption({
            color: ['#516B91','#59C4E6','#EDAFDA','#93B7E3','#A5E7F0','#CBB0E3'],
            title : {
                text: '用水类型',
                subtext: '',
                x:'center',
                textStyle:{
                    color:'rgba(102, 102, 102, 0.7)',
                    fontSize:18,
                    fontWeight:'bolder'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['经营服务','生活（一户）','生活（总表）','行政事业','工业用水'],
                show:false
            },
            series : [
                {
                    name: '用水类型',
                    type: 'pie',
                    radius : '60%',//饼图大小
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter:"{b} : {c}"
                        }
                    },
                    data:[
                        {value:111, name:'经营服务'},
                        {value:20, name:'生活（一户）'},
                        {value:65, name:'生活（总表）'},
                        {value:30, name:'行政事业'},
                        {value:50, name:'工业用水'}
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
        
    }
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    onRadioChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value
        });
    }
    foucuschange(e) {
        let obj = e.target;
        if(obj.value.length == 0){
            this.setState({
                IptTipsshow : true
            })
        }else {
            this.setState({
                IptTipsshow : false
            })
        }
    }

    oninput(e) {
        let obj = e.target;
        if(obj.value.length > 0) {
            this.setState({
                IptTipsshow : false
            })
        }else { 
            this.setState({
                IptTipsshow : true
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        // if(this.props.data.checked !== nextProps.data.checked){
        //     return true;
        // }
        return false;   
    }
    
    //表格数据
    render() {
        const plainOptions = ['垃圾费', '连收累计', '模糊','转预存'];
        const usertabledata = [
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
            {type:'水费',month:'2017-02-03',thisReading:'23',water:'56',Chargeforwater:'56',grads:'1',Owetheamount:'56',receivable:'42'},
        ];
        function handleChange(value) {
            console.log(value);  // { key: "lucy", label: "Lucy (101)" }
        }
        console.log("我被render了一次");
        let isshowtips = this.state.IptTipsshow ? 1:0;
        return (
            <div className="index_right_cont_container">
                <div className="container_out">
                    {/*工具栏*/}
                    <div className="toolbar" style={{width:'100%'}}>
                        <div className="toolbar-md-1">
                            <i className="iconfont icon-qita" />
                            <span className="title">附加：</span>
                        </div>
                        <div className="toolbar-md-1">
                            <CheckboxGroup options={plainOptions} defaultValue={['']} onChange={this.onChange} />
                        </div>
                        <div className="toolbar-md-1">
                            <i className="iconfont icon-fukuan" />
                            <span className="title">付款方式：</span>
                        </div> 
                        <div className="toolbar-md-1">
                            <RadioGroup onChange={this.onRadioChange.bind(this)} value={this.state.value}>
                                 <Radio value={1}>现金</Radio>
                                 <Radio value={2}>转账</Radio>
                            </RadioGroup>
                        </div>
                        <div className="toolbar-md-1">
                            <i className="iconfont icon-fapiaosel" />
                        </div>
                        <div className="toolbar-md-1">
                            <div className="invoice">
                                <span className="title">当前发票：</span>
                                <span>11102</span>
                            </div>
                        </div>
                        <div className="toolbar-md-1">
                            <div className="invoice">
                                <span className="title">截止发票：</span>
                                <span>20145</span>
                            </div>
                        </div>
                    </div>
                    {/*正文*/}
                    <div className="TollPbsf" style={{background:'#fff'}}>
                        <div className="list-md-1">
                            <div className="list-md-left">
                                <div className="inner">
                                    <div className="iptHandle">
                                        <div className="left">
                                            <div className="iptout">
                                                <div className="form">
                                                    <div className="choose">
                                                        <Select labelInValue defaultValue={{ key: 'name' }} size="large" style={{ width:'100%',height:'100%'}} onChange={handleChange}>
                                                            <Select.Option value="name">姓名</Select.Option>
                                                            <Select.Option value="no">户号</Select.Option>
                                                            <Select.Option value="tel">手机号</Select.Option>
                                                            <Select.Option value="IDcard">身份证</Select.Option>
                                                        </Select>
                                                    </div>
                                                    <label className="IptTips" style={{opacity:isshowtips}}>
                                                        <font>请输入查询内容</font>
                                                    </label>
                                                    <input type="text" 
                                                           onFocus={this.foucuschange.bind(this)}
                                                           onInput={this.oninput.bind(this)}
                                                           ref="textInput"/>
                                                    <button className="search">搜索</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="innerBtn">
                                                <div className="innerBtn-col">
                                                    <button>读卡</button>
                                                </div>
                                                <div className="innerBtn-col">
                                                    <button>预存</button>
                                                </div>
                                                <div className="innerBtn-col">
                                                    <button>收费</button>
                                                </div>
                                                <div className="innerBtn-col">
                                                    <button className="clear">清空</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="UserInfo">
                                        <div className="inner">
                                            <div className="UserInfoLeft">
                                                <div className="usercode">
                                                    <div className="col-md-1">
                                                        <div className="commonin">
                                                            <span className="tips succ">
                                                                <Icon type="close" style={{color:'#EC6066'}}/>
                                                            </span>
                                                            <span className="name">缴费状态：欠费</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="commonin">
                                                            <span className="tips succ">
                                                                <Icon type="check" />
                                                            </span>
                                                            <span className="name">收费标识：正常</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="commonin">
                                                            <span className="tips succ">
                                                                <Icon type="check" />
                                                            </span>
                                                            <span className="name">发票标识：正常</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="UserInfo-col-1">
                                                    <ul style={{width:'100%',height:'100%'}}>
                                                        <li>
                                                            <p><span className="title">用户姓名:</span><span className="mes" style={{fontWeight:600}}>李四</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">联系电话:</span><span className="mes">18023565623</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">联系地址:</span><span className="mes">成都市青羊区</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">用水人数:</span><span className="mes">2</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">水表编号:</span><span className="mes">024</span></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="UserInfo-col-1">
                                                    <ul style={{width:'100%',height:'100%'}}>
                                                        <li>
                                                            <p><span className="title">用户户号:</span><span className="mes" >01010015</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">所属区域:</span><span className="mes">成都市青羊区</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">住房面积:</span><span className="mes">82</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">用户状态:</span><span className="mes">已开</span></p>
                                                        </li>
                                                        <li>
                                                            <p><span className="title">账户余额:</span><span className="mes">24.56</span></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="UserInfoRight">
                                                <div className="inner">
                                                    <div className="moneyinfo">
                                                        <div className="moneyinfo-md-1">
                                                            <div className="commonin" style={{textAlign:'left'}}>
                                                                <span className="title" style={{fontSize:'16px',display:'block'}}>应收合计(￥)：</span>
                                                                <span className="money" style={{fontSize:'40px',color:'#EC6066'}}><em style={{fontStyle:'normal'}}>55555.00</em></span>
                                                            </div>
                                                        </div>
                                                        <div className="moneyinfo-md-1 moneyinfo-md-2">
                                                            <div className="moneyinfoIn">
                                                                <div className="commonin">
                                                                    <div className="title">本次结余:</div>
                                                                    <div className="money">23.03</div>
                                                                </div>
                                                            </div>
                                                            <div className="moneyinfoIn">
                                                                <div className="commonin">
                                                                    <div className="title">上次结余:</div>
                                                                    <div className="money">2.05</div>
                                                                </div>
                                                            </div>

                                                            <div className="moneyinfoIn">
                                                                <div className="commonin">
                                                                    <div className="title">上笔收入:</div>
                                                                    <div className="money">560.00</div>
                                                                </div>
                                                            </div>
                                                            <div className="moneyinfoIn">
                                                                <div className="commonin">
                                                                    <div className="title">客户支付:</div>
                                                                    <div className="money">200.00</div>
                                                                </div>
                                                            </div>
                                                            <div className="moneyinfoIn">
                                                                <div className="commonin">
                                                                    <div className="title">本次找零:</div>
                                                                    <div className="money">87.00</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-md-right">
                                <div className="inner" ref="pieReact"></div>
                            </div>
                        </div>
                        <div className="list-md-1">
                            <div className="table">
                                <div className="table_thead">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>类型</th>
                                            <th>月份</th>
                                            <th>本次抄表</th>
                                            <th>表计水量</th>
                                            <th>收费水量</th>
                                            <th>梯度</th>
                                            <th>欠费金额</th>
                                            <th>实应收</th>
                                            <th>数据</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="table_tbody">
                                    <table>
                                        <tbody>
                                        {
                                            usertabledata.map((ele,i)=>{
                                                return <tr key={i}>
                                                    <td>{ele.type}</td>
                                                    <td>{ele.month}</td>
                                                    <td>{ele.thisReading}</td>
                                                    <td>{ele.water}</td>
                                                    <td>{ele.Chargeforwater}</td>
                                                    <td>{ele.grads}</td>
                                                    <td>{ele.Owetheamount}</td>
                                                    <td>{ele.receivable}</td>
                                                    <td className="btn_info"><i className="iconfont icon-chakangengduo1"/>更多</td>
                                                    <td className="btn_remove"><i className="iconfont icon-shanchu"/>删除</td>
                                                </tr>
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table_tfoot">
                                    <table>
                                        <tfoot>
                                        <tr>
                                            <th>合计</th>
                                            <th>11</th>
                                            <th>56</th>
                                            <th>65</th>
                                            <th>489</th>
                                            <th />
                                            <th>89</th>
                                            <th>26</th>
                                            <th />
                                            <th />
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default pbsf;
