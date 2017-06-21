/**
 * Created by Administrator on 2017-02-15.
 */
/**这是水表报表页面*/
'use strict';
import React from 'react';
import Link from 'react-router/lib/Link';
import {connect} from 'react-redux';
import Loading from '../../../common/components/common/loading';
// import './index.scss';
class Statement extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="index_right_cont_inner">
                <div className="index_right_cont_top_nav">
                    <ul>
                        <li style={{marginLeft:'10px'}}><Link activeClassName="active" to="/index/statement/cbfbtj" >抄表分布统计</Link></li>
                        <li><Link activeClassName="active" to="/index/statement/cbltj" >抄表率统计</Link></li>
                        <li><Link activeClassName="active" to="/index/statement/ssltj" >水损率统计</Link></li>
                        <li><Link activeClassName="active" to="/index/statement/xzyhtj" >新增用户统计</Link></li>
                        <li><Link activeClassName="active" to="/index/statement/ysfbtj" >用水分布统计</Link></li>
                        <li><Link activeClassName="active" to="/index/statement/jtfbtj" >阶梯分布统计</Link></li>
                        <li><Link activeClassName="active" to="/index/statement/sblxtj" >水表类型统计</Link></li>
                    </ul>
                </div>
                { this.props.isloading ? <div className="pcloading"><Loading /></div> :  this.props.children }
            </div>
        );
    }
}
export default connect(state => ({
    isloading: state.mReducer.isloading
}))(Statement);