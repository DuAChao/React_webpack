/**
 * Created by Administrator on 2017-02-15.
 */
/**这是营业收费页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
import { Spin } from 'antd';
import pureRender from "pure-render-decorator";


class Toll extends React.Component {

    constructor() { 
        super();
        this.state={
            loading : false
        }
    }
    componentWillUpdate(nextprops) {
        if(nextprops.location.pathname !== this.props.location.pathname){
            this.setState({
                loading : true
            })
        }
        
    }

    componentDidUpdate(nextprops) {
        
        // if(this.props.common.loading === true){
        //
        // }
    }

    render() {
        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/toll/pbsf" >普表收费</Link></li>
                        <li><Link activeClassName="active" to="/index/toll/kbcz" >卡表充值</Link></li>
                        <li><Link activeClassName="active" to="/index/toll/sftj" >收费统计</Link></li>
                        <li><Link activeClassName="active" to="/index/toll/sfjl" >收费记录</Link></li>
                        <li><Link activeClassName="active" to="/index/toll/ycjl" >预存记录</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(pureRender(Toll));