/**
 * Created by Administrator on 2017-02-15.
 */
/**这是用水管理页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class Water extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/water/zdsh" >止度审核</Link></li>
                        <li><Link activeClassName="active" to="/index/water/ysjm" >用水减免</Link></li>
                        <li><Link activeClassName="active" to="/index/water/yysl" >月用水量</Link></li>
                        <li><Link activeClassName="active" to="/index/water/qfyh" >欠费用户</Link></li>
                        <li><Link activeClassName="active" to="/index/water/jels" >金额流水</Link></li>
                        <li><Link activeClassName="active" to="/index/water/cbls" >抄表流水</Link></li>
                        <li><Link activeClassName="active" to="/index/water/lcfx" >漏抄分析</Link></li>
                        <li><Link activeClassName="active" to="/index/water/ysdt" >用水动态</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Water);