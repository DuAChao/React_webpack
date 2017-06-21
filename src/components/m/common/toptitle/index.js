/**
 * Created by Administrator on 2017-04-21.
 */
import React from 'react';
import {browserHistory} from 'react-router';
class toptitle extends React.Component {
    constructor() {
        super();
    }
    toback() {
        this.props.clickToHomeMActionCreator(this.props.navtitle);
        browserHistory.go(-1);
    }
    render() {
        return (
            <label className="back" onClick={this.toback.bind(this)}>
                <i className="iconfont icon-fanhui"/>
                <span>返回</span>
            </label>
        );
    }
}

export default toptitle;