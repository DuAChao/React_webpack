/**
 * Created by Administrator on 2017-02-15.
 */
/**这是档案管理页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';

class Record extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/record/yhda" >用户档案</Link></li>
                        <li><Link activeClassName="active" to="/index/record/yhbg" >用户变更</Link></li>
                        <li><Link activeClassName="active" to="/index/record/yhtj" >用户统计</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}

export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Record);