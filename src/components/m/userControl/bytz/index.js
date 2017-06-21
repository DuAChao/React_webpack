/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import {browserHistory} from 'react-router';
import { Icon } from 'antd';
import Back from '../../common/back';

class bytz extends React.Component {

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
    // <Icon type="arrow-left" />
    render() {
        return (
            <div className={this.state.init}>
                <div className="toptitle" >
                    <div className="toptitleout">
                        <label className="back" onClick={this.toback.bind(this)}>
                            <Back />
                        </label>
                        <span>表页调整</span>
                    </div>
                </div>
                <div className="bytzCont">
                    <div className="ipt">
                        <div className="icon">
                            <Icon type="user" />
                        </div>
                        <input type="number" placeholder="请输入参考户号" pattern="[0-9]*"/>
                        <button>搜索</button>
                    </div>
                    <div className="userInfo">
                        <p>
                            <span className="title">户&nbsp;&nbsp;&nbsp;&nbsp;号</span>
                            <span className="info-list">01010015</span>
                        </p>
                        <p>
                            <span className="title">户&nbsp;&nbsp;&nbsp;&nbsp;名</span>
                            <span className="info-list">李大炮</span>
                        </p>
                        <p>
                            <span className="title">片&nbsp;&nbsp;&nbsp;&nbsp;区</span>
                            <span className="info-list">二流子区</span>
                        </p>
                        <p>
                            <span className="title">抄表本</span>
                            <span className="info-list">1001</span>
                        </p>
                        <p>
                            <span className="title">表序号</span>
                            <span className="info-list">011</span>
                        </p>
                        <p>
                            <span className="title">抄表员</span>
                            <span className="info-list">李大钊</span>
                        </p>
                    </div>
                    <div className="ipt" style={{marginTop:'0.2rem'}}>
                        <div className="icon">
                            <Icon type="user" />
                        </div>
                        <input type="number" placeholder="请输入调整户号" pattern="[0-9]*"/>
                        <button>搜索</button>
                    </div>
                    <div className="userInfo">
                        <p>
                            <span className="title">户&nbsp;&nbsp;&nbsp;&nbsp;号</span>
                            <span className="info-list">01010015</span>
                        </p>
                        <p>
                            <span className="title">户&nbsp;&nbsp;&nbsp;&nbsp;名</span>
                            <span className="info-list">李大炮</span>
                        </p>
                        <p>
                            <span className="title">片&nbsp;&nbsp;&nbsp;&nbsp;区</span>
                            <span className="info-list">二流子区</span>
                        </p>
                        <p>
                            <span className="title">抄表本</span>
                            <span className="info-list">1001</span>
                        </p>
                        <p>
                            <span className="title">表序号</span>
                            <span className="info-list">011</span>
                        </p>
                        <p>
                            <span className="title">抄表员</span>
                            <span className="info-list">李大钊</span>
                        </p>
                    </div>
                </div>
                <div className="bytzbtn clearfloat">
                    <button className="left">
                        <Icon type="arrow-left" />表前调整
                    </button>
                    <button className="right">
                        表后调整<Icon type="arrow-right" />
                    </button>
                </div>
              
            </div>
        );
    }
}

export default bytz;