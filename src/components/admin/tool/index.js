/**
 * Created by Administrator on 2017-02-15.
 */
/**这是工具卡片页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class Tool extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/tool/gnk" >功能卡</Link></li>
                        <li><Link activeClassName="active" to="/index/tool/yhk" >用户卡</Link></li>
                        <li><Link activeClassName="active" to="/index/tool/hck" >回抄卡</Link></li>
                        <li><Link activeClassName="active" to="/index/tool/csk" >参数卡</Link></li>
                        <li><Link activeClassName="active" to="/index/tool/hbk" >换表卡</Link></li>
                        <li><Link activeClassName="active" to="/index/tool/cbk" >抄表卡</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Tool);