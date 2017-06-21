/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import {browserHistory} from 'react-router';
import { Button, Icon } from 'antd';
import Back from '../../common/back';

class ysbg extends React.Component {

    constructor() {
        super();
        this.state={
            init : 'info'
        }
      
    }
    componentWillMount() {
        this.setState({
            init : 'info change'
        })
        this.props.clickToMActionCreator();
    }
    
    INPUT(e) {
        var obj = e.target;
        console.log(obj.value);
        if(obj.value.length > 3) {
            obj.value=obj.value.slice(0,3)
           
        }else if(obj.value > 101) {
            obj.value = 100 ;
        }
    }
    toback() {
        browserHistory.go(-1);
    }

    render() {
        return (
            <div className={this.state.init}>
                <div className="toptitle" >
                    <div className="toptitleout">
                        <label className="back" onClick={this.toback.bind(this)}>
                            <Back />
                        </label>
                        <span>用水变更</span>
                    </div>
                </div>
                <div className="ysbgCont">
                    <div className="ipt">
                        <div className="icon">
                            <Icon type="user" />
                        </div>
                        <input type="number" placeholder="请输入查询户号" pattern="[0-9]*"/>
                        <button>
                            <Icon type="search" />
                        </button>
                    </div>
                    <div className="userInfo">
                        <p>
                            <span className="title">用户户号</span>
                            <span className="info-list">01010015</span>
                        </p>
                        <p>
                            <span className="title">用户户名</span>
                            <span className="info-list">李大炮</span>
                        </p>
                        <p>
                            <span className="title">用户类型</span>
                            <span className="info-list">二流子区</span>
                        </p>
                        <p>
                            <span className="title">用户地址</span>
                            <span className="info-list">1001</span>
                        </p>
                        <p>
                            <span className="title">用水类型</span>
                            <span className="info-list">生活用水</span>
                        </p>
                    </div>
                    <div className="typeinfo">
                        <div className="thead">
                            <div className="thead-list">名称</div>
                            <div className="thead-list">比例</div>
                            <div className="thead-list">定量</div>
                        </div>
                        <div className="tbody">
                            <ul>
                                <li>
                                    <div className="tbody-list">生活(一户)</div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in" >
                                            <input type="number" placeholder="请输入比例" maxLength="3" pattern="[0-9]*" onInput={this.INPUT.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in">
                                            <input type="number" placeholder="请输入定量" pattern="[0-9]*"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="tbody-list">生活(总表)</div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in" >
                                            <input type="number" placeholder="请输入比例" maxLength="3" pattern="[0-9]*" onInput={this.INPUT.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in">
                                            <input type="number" placeholder="请输入定量" pattern="[0-9]*"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="tbody-list">行政事业</div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in" >
                                            <input type="number" placeholder="请输入比例" maxLength="3" pattern="[0-9]*" onInput={this.INPUT.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in">
                                            <input type="number" placeholder="请输入定量" pattern="[0-9]*"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="tbody-list">工业用水</div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in" >
                                            <input type="number" placeholder="请输入比例" maxLength="3" pattern="[0-9]*" onInput={this.INPUT.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in">
                                            <input type="number" placeholder="请输入定量" pattern="[0-9]*"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="tbody-list">工业用水</div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in" >
                                            <input type="number" placeholder="请输入比例" maxLength="3" pattern="[0-9]*" onInput={this.INPUT.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in">
                                            <input type="number" placeholder="请输入定量" pattern="[0-9]*"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="tbody-list">工业用水</div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in" >
                                            <input type="number" placeholder="请输入比例" maxLength="3" pattern="[0-9]*" onInput={this.INPUT.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="tbody-list">
                                        <div className="tbody-list-in">
                                            <input type="number" placeholder="请输入定量" pattern="[0-9]*"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ysbgbtn clearfloat">
                    <button className="left">
                        确认变更
                    </button>
                    <button className="right">
                        删除变更
                    </button>
                </div>
            </div>
        );
    }
}

export default ysbg;