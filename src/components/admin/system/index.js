/**
 * Created by Administrator on 2017-02-15.
 */
/**这是系统设置页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class System extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/system/bmsz" >部门设置</Link></li>
                        <li><Link activeClassName="active" to="/index/system/czysz" >操作员设置</Link></li>
                        <li><Link activeClassName="active" to="/index/system/sbsz" >水表设置</Link></li>
                        <li><Link activeClassName="active" to="/index/system/ycsz" >远传设置</Link></li>
                        <li><Link activeClassName="active" to="/index/system/sjsz" >水价设置</Link></li>
                        <li><Link activeClassName="active" to="/index/system/qtsz" >其他设置</Link></li>
                        <li><Link activeClassName="active" to="/index/system/bdsz" >本地设置</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(System);