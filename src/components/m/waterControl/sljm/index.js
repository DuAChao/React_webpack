/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import {browserHistory} from 'react-router';
import { Button, Icon , Checkbox  } from 'antd';
import Back from '../../common/back';

class sljm extends React.Component {

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
                        <span>水量减免</span>
                    </div>
                </div>
                <div className="sljmCont">
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
                            <span className="title">用户状态</span>
                            <span className="info-list">正常</span>
                        </p>
                        <p>
                            <span className="title">用户地址</span>
                            <span className="info-list">121212121</span>
                        </p>
                    </div>
                    <div className="typeinfo">
                        <div className="thead">
                            <div className="thead-list box">选择</div>
                            <div className="thead-list date">月份</div>
                            <div className="thead-list">水量</div>
                            <div className="thead-list">违约金</div>
                        </div>
                        <div className="tbody">
                            <ul>
                                <li>
                                    <div className="tbody-list box">
                                        <Checkbox />
                                    </div>
                                    <div className="tbody-list date">2017-03-02</div>
                                    <div className="tbody-list">23</div>
                                    <div className="tbody-list">1.3</div>
                                </li>
                                <li>
                                    <div className="tbody-list box">
                                        <Checkbox />
                                    </div>
                                    <div className="tbody-list date">2017-03-02</div>
                                    <div className="tbody-list">23</div>
                                    <div className="tbody-list">1.3</div>
                                </li>
                                <li>
                                    <div className="tbody-list box">
                                        <Checkbox />
                                    </div>
                                    <div className="tbody-list date">2017-03-02</div>
                                    <div className="tbody-list">23</div>
                                    <div className="tbody-list">1.3</div>
                                </li>
                                <li>
                                    <div className="tbody-list box">
                                        <Checkbox />
                                    </div>
                                    <div className="tbody-list date">2017-03-02</div>
                                    <div className="tbody-list">23</div>
                                    <div className="tbody-list">1.3</div>
                                </li>
                                <li>
                                    <div className="tbody-list box">
                                        <Checkbox />
                                    </div>
                                    <div className="tbody-list date">2017-03-02</div>
                                    <div className="tbody-list">32</div>
                                    <div className="tbody-list">1.3</div>
                                </li>
                                <li>
                                    <div className="tbody-list box">
                                        <Checkbox />
                                    </div>
                                    <div className="tbody-list date">2017-03-02</div>
                                    <div className="tbody-list">23</div>
                                    <div className="tbody-list">1.3</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sljmbtn clearfloat">
                    <button>确定</button>
                </div>
            </div>
        );
    }
}

export default sljm;