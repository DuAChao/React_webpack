/**
 * Created by Administrator on 2017-02-15.
 */
/**这是营业报表页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class Charge extends React.Component {

    constructor() {
        super();
    }
    
    render() {
        
        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/charge/yysftj" >营业收费统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/yckftj" >预存扣费统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/yslxtj" >用水类型统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/ysfytj" >应收费用统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/qftj" >欠费统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/hsltj" >回收率统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/fyjmtj" >费用减免统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/yyzftj" >营业作废统计</Link></li>
                        <li><Link activeClassName="active" to="/index/charge/yylptj" >营业领票统计</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Charge);