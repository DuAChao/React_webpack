/**
 * Created by Administrator on 2017-02-15.
 */
/**营业管理*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class Business extends React.Component {
    constructor() {
        super();
    } 
    render() {
        return ( 
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/business/yyxj" >营业小计</Link></li>
                        <li><Link activeClassName="active" to="/index/business/fply" >发票领用</Link></li>
                        <li><Link activeClassName="active" to="/index/business/yyjp" >营业交票</Link></li>
                        <li><Link activeClassName="active" to="/index/business/zzsp" >增值税票</Link></li>
                        <li><Link activeClassName="active" to="/index/business/dxfs" >短信发送</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}
export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Business);