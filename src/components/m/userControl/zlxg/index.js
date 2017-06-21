/**
 * Created by Administrator on 2017-04-17.
 */
import React from 'react';
import './index.scss';
import {browserHistory} from 'react-router';
import { Button, Icon } from 'antd';
import Back from '../../common/back';

class zlxg extends React.Component {

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
                        <span>资料修改</span>
                    </div>
                </div>
                <div className="zlxgCont">
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
                        <div>
                            <span className="title">用户户号</span>
                            <input type="number" placeholder="请输入用户户号" />
                        </div>
                        <div>
                            <span className="title">用户姓名</span>
                            <input type="text" placeholder="请输入用户姓名" />
                        </div>
                        <div>
                            <span className="title">用户类型</span>
                            <input type="text" placeholder="请输入用户类型" />
                        </div>
                        <div>
                            <span className="title">联系电话</span>
                            <input type="tel" placeholder="请输入联系电话" />
                        </div>
                        <div>
                            <span className="title">用户表号</span>
                            <input type="number" placeholder="请输入用户表号" />
                        </div>
                        <div>
                            <span className="title">用水人口(人)</span>
                            <input type="number" placeholder="请输入用水人口" />
                        </div>
                        <div>
                            <span className="title">住房面积(㎡)</span>
                            <input type="number" placeholder="请输入住房面积" />
                        </div>
                        <div>
                            <span className="title">用户地址</span>
                            <div className="textareaout">
                                <textarea type="text" placeholder="请输入用户地址" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zlxgbtn clearfloat">
                    <button>确认修改</button>
                </div>
            </div>
        );
    }
}

export default zlxg;