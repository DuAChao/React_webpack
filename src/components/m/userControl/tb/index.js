/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import {browserHistory} from 'react-router';
import { Button, Icon } from 'antd';
import Back from '../../common/back';
import Link from 'react-router/lib/Link';

class hb extends React.Component {

    constructor() {
        super();
        this.state={
            init : 'info'
        }
      
    }
    componentWillMount() {
        this.setState({
            init : 'info change'
        });
        this.props.clickToMActionCreator();
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
                        <span>停表</span>
                    </div>
                </div>
                <div className="tbCont">
                    <div className="ipt">
                        <div className="icon">
                            <Icon type="user" />
                        </div>
                        <input type="number" placeholder="请输入查询考户号" pattern="[0-9]*"/>
                        <button>
                            <Icon type="search" />
                        </button>
                    </div>
                    <div className="userInfo">
                        <p>
                            <span className="title">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</span>
                            <span className="info-list">01010015</span>
                        </p>
                        <p>
                            <span className="title">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
                            <span className="info-list">李大炮</span>
                        </p>
                        <p>
                            <span className="title">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</span>
                            <span className="info-list">二流子区</span>
                        </p>
                        <p>
                            <span className="title">用户状态</span>
                            <span className="info-list">1001</span>
                        </p>
                        <p>
                            <span className="title">上次抄表月份</span>
                            <span className="info-list">011</span>
                        </p>
                        <p>
                            <span className="title">抄表止度</span>
                            <span className="info-list">011</span>
                        </p>
                        <p>
                            <span className="title">本次抄表月份</span>
                            <span className="info-list">011</span>
                        </p>
                        <p>
                            <span className="title">本次止度</span>
                            <span className="info-list">011</span>
                        </p>
                    </div>
                    <div className="userInfo2">
                        <p>
                            <span className="title">本次止度</span>
                            <span className="info-list"><input type="number" placeholder="请输入本次止度" pattern="[0-9]*"/></span>
                        </p>
                        <p>
                            <span className="title">停表类型</span>
                            <span className="info-list"><input type="number" placeholder="请输入停表类型" pattern="[0-9]*"/></span>
                        </p>
                        <p className="textarea">
                            <span className="title">停表原因</span>
                            <span className="info-list"><textarea type="text" placeholder="请输入停表原因"/></span>
                        </p>
                    </div>
                </div>
                <div className="tbbtn clearfloat">
                    <button className="left">止度审核</button>
                    <button className="right">停表</button>
                </div>
              
            </div>
        );
    }
}

export default hb;