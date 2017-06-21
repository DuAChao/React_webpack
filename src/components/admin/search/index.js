/**
 * Created by Administrator on 2017-02-15.
 */
/**这是数据查询页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class Search extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/search/jfcx" >缴费查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/yccx" >预存查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/fpcx" >发票查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/kfcx" >扣费查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/bscx" >补收查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/dscx" >代收查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/bgcx" >变更查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/jmcx" >减免查询</Link></li>
                        <li><Link activeClassName="active" to="/index/search/bccx" >补偿查询</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Search);