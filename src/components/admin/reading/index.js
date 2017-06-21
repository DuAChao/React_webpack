/**
 * Created by Administrator on 2017-02-15.
 */
/**这是抄表管理页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class Reading extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/reading/rgcb" >人工抄表</Link></li>
                        <li><Link activeClassName="active" to="/index/reading/yccb" >远传抄表</Link></li>
                        <li><Link activeClassName="active" to="/index/reading/zddr" >止度导入</Link></li>
                        <li><Link activeClassName="active" to="/index/reading/cbdc" >抄表导出</Link></li>
                        <li><Link activeClassName="active" to="/index/reading/bcgl" >表册管理</Link></li>
                        <li><Link activeClassName="active" to="/index/reading/zblr" >总表录入</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Reading);