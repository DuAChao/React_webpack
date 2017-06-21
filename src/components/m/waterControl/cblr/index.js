/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import {browserHistory} from 'react-router';
import { Button, Icon } from 'antd';
import Back from '../../common/back';
class cblr extends React.Component {

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
                        <span>抄表录入</span>
                    </div>
                </div>
                <div className="cblrCont">
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
                            <span className="title">用水类型</span>
                            <span className="info-list">1001</span>
                        </p>
                        <p>
                            <span className="title">上次月份</span>
                            <span className="info-list">2017-06-09</span>
                        </p>
                        <p>
                            <span className="title">上次止度</span>
                            <span className="info-list">1001</span>
                        </p>
                    </div>
                    <div className="userInfo2">
                        <p>
                            <span className="title">当前月份</span>
                            <span className="info-list">2017-05-09</span>
                        </p>
                        <p>
                      
                        </p>
                        <p>
                            <span className="title">当前止度</span>
                            <span className="info-list"><input type="number" placeholder="请输入当前止度" pattern="[0-9]*"/></span>
                        </p>
                    </div>
                </div>
                <div className="cblrbtn clearfloat">
                    <button>录入</button>
                </div>
              
            </div>
        );
    }
}

export default cblr;